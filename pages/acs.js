import React,{ Component } from 'react'
import axios from 'axios';

export default class Index extends Component{
    static async getInitialProps(){
        // const res = await axios.get('https://m.maizuo.com/gateway?cityId=210200&pageNum=1&pageSize=10&type=1&k=5299894',
        const res = await axios.get('https://mhbkacsdev.azurewebsites.net/api/services/meeting/meeting-list?Keyword=&state=today&pageIndex=1&pageSize=100', 
            {
                headers: {
                    'X-Host': 'mall.film-ticket.film.list'
                    }
            }
        );
        console.log(res);
        return{
            films: []
        }
    }

    render(){
        return(
            <div>
                <h1>list</h1>
                <ul>
                    {
                        this.props.films.map(item => {
                            return <li key={item.filmId}>
                                {item.name}
                                <img src={item.poster} />
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}

// export default() => (
//     <div><h1>hello simple!!</h1></div>
// )