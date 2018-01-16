import React from 'react';
import ReactDOM from 'react-dom';
import './css/common.scss';
class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: []
        }
    }

    componentDidMount() {
        console.log('did mount');
        setTimeout(()=> {
            this.setState({
                list: [1, 2, 3, 4]
            }, ()=> {
                console.log(this.state.list)
            })
        }, 1000)
    }

    componentWillUnmount() {
    }

    handleClick = ()=> {
        console.log('clicked!')
    };

    render() {
        return (
            <div className="demo-wrapper">
                <h1 onClick={()=> this.handleClick()}>hello!! react</h1>
                <ul>
                    {
                        this.state.list.map((i,item)=>{
                            return(
                                <DoList key={i} val={item}></DoList>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}
function DoList(props){
    return(
        <li>{props.val}</li>
    )
}
ReactDOM.render(<App />, document.getElementById('app'));