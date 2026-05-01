export default function handler(req, res) {
  if (req.method === "POST") {
    console.log("New message:", req.body);

    res.status(200).json({ message: "Message received!" });
  } else {
    res.status(405).end();
  }
}
