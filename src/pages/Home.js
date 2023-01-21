import { StyleSheet } from 'react-native';

export const Home = () => {

    const styles = StyleSheet.create({})

    return (
        <>
            <header className = "wit-header">
                <h1>Women In Tech Summit 2023</h1>
            </header>
            <div>
                <div id="wit-info">
                    <h2>The Largest Women in Technology Conference in Canada</h2>
                    <p>Provided paragraph</p>
                </div>

                <div id="workshops-and-events">
                    <h2>Workshops & Events</h2>
                    <button>Workshop 1</button>
                    <button>Workshop 2</button>
                    <button>Workshop 3</button>
                </div>
            </div>
        </>
    )
}