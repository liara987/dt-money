import { RepositoryItem } from "./RepositoryItem";

export function RepositoryList(){
    const repository = {
        name: 'unform',
        url: 'https://github.com/liara987',
        description: 'All repository from liara'
    }
    return(
        <section className="repository-list">
            <h1>Repository List</h1>
            <ul>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
                <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}