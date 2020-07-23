# Simple URL Shortner Using Deno

## Setup

1. Clone repo
1. Setup deno: `brew install deno`
1. Run project: `deno run --allow-net --allow-read mod.ts`
   - `--allow-net` required for serving over http
   - `--allow-read` required for serving index.html static file
   - `mod.ts` is the entry file

## Usage

### Create link

```
POST /links/add
Content-Type: application/json
{
    "url": "https://google.com"
}
```

### Get all links

```
GET /links
```

### Get link and redirect

```
GET /your_link_short_code
```
