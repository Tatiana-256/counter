import React from 'react';
import Counter from "./components/Counter/counter";
import SettingsCounter from "./components/SettingsCounter/SettingsCounter";
import "./App.css"
import styles from "./components/Counter/counter.module.css";
import {connect} from "react-redux";
import {initialStateType} from "./redux/reducer";
import {actions} from "./redux/action";


type mapStateToPropsType = {
    state: initialStateType,
}

type mapDispatchToPropsType = {
    addStartValue: (number: number) => void
    addMaxValue: (number: number) => void
    incrementMax: () => void
    decrementMax: () => void
    decrementStart: () => void
    setSettings: () => void
    resetCounter: () => void
    incrementCounter: () => void
    incrementStart: () => void
}

type TOwnProps = {}

type PropsType = mapDispatchToPropsType & mapStateToPropsType & TOwnProps


class App extends React.Component<PropsType> {


    namesBtn = ["Increment", "Reset"]


    incrementCounter = () => {
        if (this.props.state.count < this.props.state.maxValue) {
            return this.props.incrementCounter()
        } else return this.props.state.count
    }


    render() {
        let classNumber = this.props.state.count === this.props.state.maxValue ? styles.numberRed : styles.regular;
        let classBtn = this.props.state.count === this.props.state.startValue || this.props.state.startValue >= this.props.state.maxValue ||
        this.props.state.startValue < 0 ? styles.disabled : "";
        let classForSett = this.props.state.startValue >= this.props.state.maxValue || this.props.state.startValue < 0 ? styles.disabled : "";
        let classSet = this.props.state.startValue > this.props.state.maxValue ? styles.sett : styles.regular
        let classMin = this.props.state.startValue < 0 ? styles.sett : styles.regular

        return (
            <div className="App">
                <SettingsCounter
                    addStartValue={this.props.addStartValue}
                    addMaxValue={this.props.addMaxValue}
                    incrementMax={this.props.incrementMax}
                    incrementStart={this.props.incrementStart}
                    decrementMax={this.props.decrementMax}
                    decrementStart={this.props.decrementStart}
                    setSettings={this.props.setSettings}
                    maxValue={this.props.state.maxValue}
                    startValue={this.props.state.startValue}
                    classSet={classSet}
                    classMin={classMin}
                    classBtn={classForSett}
                />

                < Counter
                    classNumber={classNumber}
                    classBtn={classBtn}
                    classForSett={classForSett}
                    state={this.props.state}
                    resetCounter={this.props.resetCounter}
                    increment={this.incrementCounter}
                    namesBtn={this.namesBtn}
                    maxValue={this.props.state.maxValue}
                    startValue={this.props.state.startValue}
                />
            </div>
        )
            ;
    }
}


const mapStateToProps = (state: initialStateType): mapStateToPropsType => {
    return {
        state: state
    }
}


const mapDispatchToProps = (dispatch: any) => {
    return {
        addStartValue: (number: number) => {
            dispatch(actions.addStartValue(number))
        },
        addMaxValue: (number: number) => {
            dispatch(actions.addMaxValue(number))
        },
        incrementMax: () => {
            dispatch(actions.incrementMax())
        },
        decrementMax: () => {
            dispatch(actions.decrementMax())
        },
        decrementStart: () => {
            dispatch(actions.decrementStart())
        },
        setSettings: () => {
            dispatch(actions.setSettings())
        },
        resetCounter: () => {
            dispatch(actions.resetCounter())
        },
        incrementCounter: () => {
            dispatch(actions.incrementCounter())
        },
        incrementStart: () => {
            dispatch(actions.incrementStart())
        }


    }
}

export default connect<mapStateToPropsType, mapDispatchToPropsType, TOwnProps, initialStateType>
(mapStateToProps, mapDispatchToProps)(App);
