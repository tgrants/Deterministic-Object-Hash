const binary = (input: ArrayBuffer) => {
  let binary = "";
  const bytes = new Uint8Array(input);
  const len = bytes.byteLength;

  for (let i = 0; i < len; i++) {
    const buffer = bytes[i];
    if (buffer) binary += String.fromCharCode(buffer);
  }

  return binary;
};

const hex = (input: ArrayBuffer) =>
  [...new Uint8Array(input)]
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");

const base64 = (input: ArrayBuffer) => Buffer.from(input).toString('base64');

const base64url = (input: ArrayBuffer) =>
  base64(input).replace(/\+/g, "-").replace(/\//g, "_").replace(/=/g, "");

export const encoders = {
  base64,
  base64url,
  hex,
  binary,
};
