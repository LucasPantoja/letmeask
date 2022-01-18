import { useAuth } from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg'

import { Button } from '../components/Button';

import '../styles/auth.scss'


export function Home() {
    const navigate =  useNavigate();
    const { user, signInWithGoogle } = useAuth();

    async function handleCreateRoom(){
        if (!user) {
            await signInWithGoogle();
        }
        navigate('room/new');
    };

    return(
        <div id='page-auth'>

            <aside>
                <img src={illustrationImg} alt="Illustration meaning questions and answers" />
                <strong>Every questions has its answer.</strong>
                <p>Learn and share knowledge with others.</p>
            </aside>

            <main>
                <div className='main-content'>
                    <img src={logoImg} alt="LetMeAsk" />
                    <button onClick={handleCreateRoom} className='create-room'>
                        <img src={googleIconImg} alt="Logo Google" />
                        Create room with Google
                    </button>
                    <div className='separator'>or enter a room</div>
                    <form>
                        <input 
                            type="text"
                            placeholder= "Enter room's code" 
                        />
                        <Button type='submit'>
                            Go to Room
                        </Button>
                    </form>
                </div>
            </main>

        </div>
    )
}