import { useAuth } from '../hooks/useAuth';
import { Link } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';

import '../styles/auth.scss'

export function NewRoom() {
    const { user } = useAuth();

    return (
        <div id='page-auth'>

            <aside>
                <img src={illustrationImg} alt="Illustration meaning questions and answers" />
                <strong>Every questions has its answer.</strong>
                <p>Learn and share knowledge with others.</p>
            </aside>

            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="LetMeAsk" />
                    <h1>{ user?.name }</h1>
                    <h2>Create new room</h2>
                    <form>
                        <input
                            type="text"
                            placeholder="Room's name"
                        />
                        <Button type='submit'>
                            Create Room
                        </Button>
                    </form>
                    <p>Join an existent room ? <Link to="/">click here</Link></p>
                </div>
            </main>

        </div>
    )
}