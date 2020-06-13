import React from 'react';
import styles from "./counter.module.css"
import Button from "../Button/button";

class Counter extends React.Component {


    render() {

        return (<div className={styles.general}>
            <div className={styles.bord}>
                {this.props.maxValue < 0 || this.props.startValue < 0 || this.props.maxValue <= this.props.startValue ?
                    <div className={styles.error}>
                        <div>Incorrect value.</div>
                        <div> 1. Max value or start value must be more than 0</div>
                        <div> 2. Max value can`t be same to start value</div>
                    </div> : <div
                        className={this.props.classNumber}>{this.props.state.count}</div>}
                <div className={styles.btn}>
                    <div className={this.props.classForSett}>
                        <Button handle={this.props.increment} name={this.props.namesBtn[0]}/>
                    </div>
                    <div className={this.props.classBtn}>
                        <Button handle={this.props.resetCounter} name={this.props.namesBtn[1]}
                                count={this.props.state.count}/>
                    </div>
                </div>
            </div>
        </div>);
    }
}

export default Counter