# ArProfile Iframe

## How to use

First you need to edit the latest release link with the profile wallet address.
`https://arweave.net/wtFZxTMjS7RspHEaRlamYm7JDjizWCvwsyHQQCARvyQ?address=<wallet_address>`

then you just add this link to iframe and then adds the iframe to your website
`<iframe src="<link>" frameorder="0" scrolling="auto" width="<width>" height="<height>"></iframe>`

I strongly recommend to just edit this options at the iframe:

- **src:** with the link that you edited before
- **width/height:** with the right fit for your need

## Development

### Available Scripts

#### `npm run dev`

Runs a localhost with the code inside dist

#### `npm run build`

It builds everything inside src generating an entire static website inside dist folder.

#### `npm run test`

This command help you to teste the iframe after build in a controlled sample website, where you can put your iframe.
