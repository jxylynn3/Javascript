# 30-Day JS Bookshelf — Program Logic Flow 
this is subject to change,
## 0. The Concept, Restated

You're not building a "list of links" anymore — you're building a **bookshelf**. Each day of
JS you've written is a **book** with a spine sitting on a shelf. The interaction model is
physical, not just navigational:

- **Browsing** → you see the whole shelf, all books standing upright, spines visible.
- **Reading** → you pull one book off the shelf. It opens. You see its contents (your code +
  notes for that day).
- **Done reading** → you put it back. The shelf returns to its resting state.

This means the app has exactly **two visual states**, and the entire system is really just
a state machine with a server behind it deciding which state to render.

---

## 1. The Two States (State Machine)

```
                     ┌────────────────────────────┐
                     │                            │
        put book     │        SHELF STATE         │
        back  ┌──────┤   (all books visible,      │
              │      │    nothing open)           │
              │      │                            │
              │      └─────────────┬──────────────┘
              │                    │
              │              click a book
              │                    │
              │                    ▼
              │       ┌────────────────────────────┐
              │       │                            │
              └───────┤        READING STATE       │
                      │   (one book pulled out,    │
                      │    contents on display)    │
                      │                            │
                      └────────────────────────────┘
```

Every request to your server resolves to one of these two states. There is no third state 
⤷ this keeps the whole app conceptually simple even at 30 books.
---

## 2. Mapping States to URLs (this is the trick that makes it work)

The "pull book off shelf" and "put it back" actions are just **URL changes**, same as before —
the bookshelf is a skin on top of the same query-param routing you already have.

```
http://localhost:3000/                     ⟶  SHELF STATE (no book active)
http://localhost:3000/?book=day-07.js      ⟶  READING STATE (day 7 pulled out)
```

- Clicking a book spine = a link to `/?book=day-07.js`
- Clicking "Put Back" / a close button / the shelf itself = a link back to `/`

Because both states are handled by the same route (`/`), your server logic doesn't fork into
two separate apps — it's one template that renders differently depending on whether `?book=`
is present. This is exactly what `generator.js` already does; we're just skinning it.

---

## 3. Full Request/Response Flow (Sequence Diagram)

```
 BROWSER                      GENERATOR.JS (SERVER)                 FILE SYSTEM
    │                                  │                                 │
    │  GET /                           │                                 │
    ├─────────────────────────────────►│                                 │
    │                                  │  fs.readdirSync(days/)          │
    │                                  ├────────────────────────────────►│
    │                                  │◄────────────────────────────────┤
    │                                  │  [day-01.js, day-02.js, ...]    │
    │                                  │                                 │
    │                                  │  parse metadata header of       │
    │                                  │  each file (day #, topic,       │
    │                                  │  date, color tag)               │
    │                                  │                                 │
    │                                  │  sort by day number             │
    │                                  │  build <div class="book">       │
    │                                  │  for each day (SHELF STATE)     │
    │                                  │                                 │
    │◄─────────────────────────────────┤  200 OK — shelf HTML            │
    │  renders bookshelf               │                                 │
    │                                  │                                 │
    │  user clicks "Day 7" spine       │                                 │
    │  GET /?book=day-07.js            │                                 │
    ├─────────────────────────────────►│                                 │
    │                                  │  check ?book= param exists      │
    │                                  │  find matching file             │
    │                                  ├────────────────────────────────►│
    │                                  │◄────────────────────────────────┤
    │                                  │  day-07.js contents + metadata  │
    │                                  │                                 │
    │                                  │  build READING STATE HTML:      │
    │                                  │   - shelf pushed to background  │
    │                                  │     (or hidden)                 │
    │                                  │   - open book panel with        │
    │                                  │     notes + code                │
    │                                  │   - inject <script src=         │
    │                                  │     "/day-07.js">               │
    │◄─────────────────────────────────┤  200 OK — reading view HTML     │
    │  renders open book               │                                 │
    │                                  │                                 │
    │  browser auto-requests           │                                 │
    │  GET /day-07.js (the <script>)   │                                 │
    ├─────────────────────────────────►│                                 │
    │                                  │  serve raw file as              │
    │                                  │  application/javascript         │
    ├────────────────────────────────────────────────────────────────────┤
    │◄─────────────────────────────────┤  200 OK — raw JS, executes      │
    │  console shows Day 7's output    │  in dev console                 │
    │                                  │                                 │
    │  user clicks "Put Back"          │                                 │
    │  GET /                           │                                 │
    ├─────────────────────────────────►│  (back to SHELF STATE)          │
    │◄─────────────────────────────────┤                                 │
```

---

## 4. Per-Book Data Model

Every book needs enough metadata to render both as a **spine** (shelf state) and a
**full page** (reading state). Keep this as a comment header in each day file, same
convention as before:

```js
/**
 * @day 7
 * @date 2026-07-25
 * @title Closures & Scope
 * @topics closures, scope, execution context
 * @color #E63946
 * @notes Finally understood why closures "remember" variables after
 *        the function that created them has returned.
 */

// ... code below
```

| Field | Used for |
|---|---|
| `day` | Sort order on the shelf |
| `date` | Shown in reading view |
| `title` | Spine label text (short, like a book title) |
| `topics` | Shown in reading view, could double as spine color-coding category |
| `color` | Spine color — gives the shelf visual variety, like your reference image |
| `notes` | Shown in reading view — your reflections |
| (code body) | Executed via the injected `<script>` tag, also displayed read-only in the reading view |

---

## 5. Shelf Rendering Logic (Phase B, expanded)

```
FOR each file in days/ (sorted by @day ascending):
    1. Parse metadata header
    2. Assign a spine width  -> based on code length (longer day = "thicker" book) [optional]
    3. Assign a spine color  -> from @color, or auto-assign from a fixed palette by topic
    4. Build spine element:
         <div class="book" style="background:{color}">
             <span class="spine-title">{title}</span>
             <a href="/?book={filename}"></a>   <-- whole spine is clickable
         </div>
    5. Append to shelf container (in day order, left to right)
END FOR
```

This is a direct implementation of the visual reference you shared — varying widths and
colors per spine come for free once you're looping over real metadata instead of just
filenames.

---

## 6. Reading View Rendering Logic (Phase C, expanded)

```
IF ?book= param present AND matches a real file:
    1. Load that file's metadata + raw code
    2. Render:
         - "Put Back" button/link  -> href="/"
         - Book title + date + topics (like a book's title page)
         - Notes section (your reflections, prose)
         - Code block (syntax highlighted, read-only display of the source)
         - Hidden <script src="/{filename}"> so it actually executes
    3. Shelf is either:
         a) hidden entirely, replaced by the open book view, OR
         b) dimmed/pushed to background with the book "in front" (closer to your
            reference image's feel — shelf still visible, one book pulled forward)
ELSE:
    Render shelf state as normal (see Phase B)
```

Design choice **(b)** — keep the shelf visible but dim it, with the open book overlapping
in front — best matches the "picking up and putting back" physical metaphor, and it's a
CSS layering concern more than a logic concern, so you can decide this later without
touching the server logic.

---

## 7. Suggested Folder Structure (updated)

```
javascript-log/
├── node_modules/
├── days/
│   ├── day-01.js
│   ├── day-02.js
│   ├── day-03.js
│   └── ...
├── generator.js          # server: routing + shelf/book HTML assembly
├── index.html            # base template shell (shared by both states)
├── shelf.css             # bookshelf visual styling
├── package.json
├── package-lock.json
└── program_logic.md
```

Moving all day files into `days/` (instead of loose in the root) solves the
self-exclusion filtering problem from before — `generator.js` only ever scans
`days/`, so it never has to guess which root files are "books" vs. app files.

---

## 8. Build Order (so this stays achievable)

```
1. Move existing introduction.js -> days/day-01.js, add metadata header
2. Update generator.js to:
     a. Read from days/ instead of root
     b. Parse metadata headers
     c. Sort by @day
3. Build SHELF STATE rendering (static spines first, no colors/widths yet)
4. Build READING STATE rendering (title + notes + code + script tag)
5. Wire up "Put Back" link -> /
6. THEN layer in visual polish:
     - spine colors from @color
     - spine width variation
     - shelf/book overlap animation (CSS transition when a book is "pulled")
7. Repeat daily: new day-XX.js with metadata -> shelf grows automatically
```

Steps 1–5 give you a fully working (if plain) bookshelf. Step 6 is purely cosmetic and can
happen any time after — even in small increments across several days, matching your "improve
it as I go" plan.

---

## 9. Why This Design Scales to 30 Books Without Extra Work

Because the shelf is **generated from the file system every request** (not hand-coded per
book), adding Day 8 tomorrow requires zero changes to `generator.js` or `index.html` 

you just drop `day-08.js` with its metadata header into `days/`, and it appears on the
shelf automatically, correctly sorted, with its own color and reading view. The system you
built for Day 1 is already the system for Day 30.
