import React from 'react';
//import Card from './components/Cards/Cards';
//import Chart from './components/Chart/Chart';
//import CountryPicker from './components/CountryPicker/CountryPicker';
import { Cards, Chart, CountryPicker, Footer, Header } from './components';
import styles from './App.module.css';
import { fetchData } from './api';
import coronaImage from './images/logo.png'

class App extends React.Component {
    state = {
        data : {},
        country : '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData });
    }

    handleCountryChange = async (country) => {
        ///fetch the data
        const fetchedData = await fetchData(country);
        ///set the state
        this.setState({ data: fetchedData, country: country })
    } 

    render() {
        const { data, country } = this.state;
        return (
            <div className={styles.container}>
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                <Header />
                <Cards data={data} />
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Chart data={data} country={country}/>
                <Footer />
            </div>
        )
    }
}

export default App;