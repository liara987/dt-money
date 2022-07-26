import { Container } from "./styles";

export function TransactionsTable(){
    return (
        <Container>
            <table>
                <thead>
                    <tr>
                        <th>Title</th>
                        <th>Value</th>
                        <th>Category</th>
                        <th>Date</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>Web page development</td>
                        <td className="deposit">R$12.000</td>
                        <td>Development</td>
                        <td>29/05/2022</td>
                    </tr>
                    <tr>
                        <td>New clothes</td>
                        <td className="withdraw">- R$400</td>
                        <td>Hoobie</td>
                        <td>29/05/2022</td>
                    </tr>
                </tbody>
            </table>
        </Container>
    )
}