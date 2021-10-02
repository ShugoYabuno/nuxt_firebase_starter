import path from "path"

const config = {
  // ip: '',
  port: 8000,
  secret: {
    session: "poke-tool-session"
  },
  root: path.normalize(path.join(__dirname, "/../.."))
}

export default config
