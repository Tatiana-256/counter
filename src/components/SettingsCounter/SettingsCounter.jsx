import React from 'react';
import styles from "../Counter/counter.module.css";
import Button from "../Button/button";


class SettingsCounter extends React.Component {
    onNumberChange = (e) => {
        this.props.addMaxValue(e.currentTarget.value)
    }

    onSetNumberChange = (e) => {
        this.props.addStartValue(e.currentTarget.value)
    }

    render() {

        return (
            <div className={styles.general}>
                <div className={styles.bord}>
                    <div className={styles.setting}>
                        <div>Max value</div>
                        <div className={this.props.classSet}>
                            <input type="number" value={this.props.maxValue} className={styles.inp}
                                   onChange={this.onNumberChange}/>
                            {/*<div className={styles.inc_decr}>*/}
                            {/*    <div className={styles.id} onClick={() => {*/}
                            {/*        this.props.incrementMax()*/}
                            {/*    }}>+*/}
                            {/*    </div>*/}
                            {/*    <div className={styles.id} onClick={() => {*/}
                            {/*        this.props.decrementMax()*/}
                            {/*    }}>-*/}
                            {/*    </div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className={styles.setting}>
                        <div>Start value</div>
                        <div className={this.props.classMin}>
                            <input type="number" value={this.props.startValue} className={styles.inp}
                                   onChange={this.onSetNumberChange}/>
                            {/*<div className={styles.inc_decr}>*/}
                                {/*<div className={styles.id} onClick={() => {*/}
                                {/*    this.props.incrementStart()*/}
                                {/*}}>+*/}
                                {/*</div>*/}
                                {/*<div className={styles.id} onClick={() => {*/}
                                {/*    this.props.decrementStart()*/}
                                {/*}}>-*/}
                                {/*</div>*/}
                            {/*</div>*/}
                        </div>
                    </div>
                    <div className={styles.btn}>
                        <div className={this.props.classBtn}>
                            <Button
                                handle={this.props.setSettings} name='Save settings'/>
                        </div>
                    </div>
                </div>
            </div>);
    }
}

export default SettingsCounter