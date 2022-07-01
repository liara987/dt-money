export function RepositoryItem(props) {
  return (
    <div>
      <li>
        <strong>{props.repository.name}</strong>
        <p>{props.repository.description}</p>
        <a href="">{props.repository.url}</a>
      </li>
    </div>
  );
}
