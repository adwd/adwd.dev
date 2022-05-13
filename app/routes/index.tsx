import styles from "../styles/index.css";

export default function Index() {
  return (
    <div className="container">
      <h1>adwd.dev</h1>
    </div>
  );
}

export function links() {
  return [{ rel: "stylesheet", href: styles }];
}
