import React,{Component} from 'react'
import TodoItems from './todo-items'

export default class Home extends Component {


    constructor(props) {
        super(props)
    }



    render() {
        return (
            <div style={styles.container}>
                <TodoItems />
                {/*<StatisticalReport />*/}
                {/*<Ranking />*/}
                {/*<AuthInfo />*/}
            </div>

        )
    }
}


const styles = {
    container: {
        backgroundColor: '#f5f5f5'
    },
}