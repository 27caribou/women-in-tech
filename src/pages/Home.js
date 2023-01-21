import { StyleSheet } from 'react-native';
import "./Home.css";

export const Home = () => {

    const styles = StyleSheet.create({})

    return (
        <>
            <div className = "div1">
                <h1 className='head'>Women In Tech Summit 2023</h1>
            </div>
            <div>
                <div className='div2'>
                    <h2 className='head1'>The Largest Women in Technology Conference in Canada</h2>
                    <p className='text'>Provided paragraph</p>
                </div>

                <div className='div2'>
                    <h2 className='text'>Workshops & Events</h2>
                    <button className='workshop-button'>Workshop 1</button>
                    <div className='divider'/>
                    <button className='workshop-button'>Workshop 2</button>
                    <div className='divider'/>
                    <button className='workshop-button'>Summit</button>
                </div>
            </div>
        </>
    )
}