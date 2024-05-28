import './Dashboard.css'
import PageTitle from '../../components/PageTitle/PageTitle'
import { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'

const BASE_URL = "https://wahcollege.co.uk/gas/assets/api";

function Dashboard() {
    const [cards, setCards] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCards = async () => {
            try {
                const response = await fetch(`${BASE_URL}/get_cards`, {
                    method: "GET",
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    mode: 'cors',
                });

                if (!response.ok) {
                  throw new Error(`HTTP error! status: ${response.status}`);
                }

                const data = await response.json();
                setCards(data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching data:', error);
                setError(error);
                setLoading(false);
            }
        };

        fetchCards();
    }, []);

    if (loading) {
        return <div>Loading...</div>
    }

    if (error) {
        return <div>Error: {error.message}</div>
    }

  return (
    <main id='main' className='main'>
        <PageTitle page='Dashboard'/>
        <section className='section dashboard'>
            <div className="row">
                <div className="col-lg-8">
                    <div className="row">
                        {
                            cards && cards.length > 0 && cards.map(card => <Card key={card.card_id} card={card} />)
                        }
                    </div>
                </div>
                <div className="col-lg-4"></div>
            </div>
        </section>
    </main>
  )
}

export default Dashboard
