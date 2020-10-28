import React, {Component} from 'react';


class Api extends Component {
    state = {
        data: [],
    };

    componentDidMount () {
        consot url = `https://en.wikipedia.org/w/api.php?action=opensearch&search=Seona+Dancing&format=json&origin=*`;

        fetch(url)
            .then((res)=> res.json())
            .then((res)=> {
                this.setState({
                    data: res
                });
            });

    };

    render () {
        const {
            data
        } = this.state;
        return ``
    }
}

export default Api;