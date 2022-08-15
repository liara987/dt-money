import { useContext } from 'react';
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import totalImg from '../../assets/total.svg'
import { Container } from "./styles";
import { TransactionContext } from './../../TransactionsContext';

export function Summary(){
    const {transactions} = useContext(TransactionContext)
    console.log(transactions);
    
    return(
        <Container>
            <div>
                <header>
                    <p>Incomes</p>
                    <img src={incomeImg} alt="Incomes" />
                </header>
                <strong>R$1,000</strong>
            </div>
            <div>
                <header>
                    <p>Outcome</p>
                    <img src={outcomeImg} alt="Outcome" />
                </header>
                <strong>- R$300,00</strong>
            </div>
            <div className="highlight-background">
                <header>
                    <p>Total</p>
                    <img src={totalImg} alt="Total" />
                </header>
                <strong>R$700,00</strong>
            </div>
        </Container>
    )
}