export default async function handler (req, res) {
  const url = decodeURIComponent(req.query.url);
  const result = await fetch(url);
  const body = await result.body;
  body.pipe(res);
};
// export const config = {
//   runtime: 'experimental-edge',
// }