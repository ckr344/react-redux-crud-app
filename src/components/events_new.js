// ReactComponentファイルに必要
import React, { Component } from 'react';
// reduxを使用する場合に必要なconnect関数
import { connect } from 'react-redux'
// ページ内にリンクを生成するために必要
import { Link } from 'react-router-dom'

// アクションを呼び出すために必要
// import { postEvents } from '../actions'

// ?????
// import { ReactComponent } from '*.svg';

// Componentのタイトル
class EventsNew extends Component {

// 　renderする内容
  render(){
    return(
      <React.Fragment>
        <div>foo</div>
      </React.Fragment>
    )
  }
}


// const mapDispatchToProps = ({ postEvent })

export default connect(null, null)(EventsNew)



// function App() {
//   // const greeting = "Hi!!";
//   // const dom = <h1 className="foo">{greeting}</h1>
//   // return (
//   //   dom
//   // );

//   // return (
//   //   <input type="text" onClick={() => {console.log("I am clicked.")}} />
//   // );

//   // return (
//   //   <input type="text" onChange={() => {console.log("I am clicked.")}} />
//   // );

//   // return (
//   //   <div>
//   //     <label htmlFor="bar"> bar </label>
//   //     <input type="text" onChange={() => {console.log("I am clicked.")}} />
//   //   </div>
//   // );

//   return (
//     <React.Fragment>
//       <label htmlFor="bar"> bar </label>
//       <input type="text" onChange={() => {console.log("I am clicked.")}} />
//     </React.Fragment>
//   );
// }

// const App = () => {
//   // const profiles = [
//   //   { name: "Taro", age: 10 },
//   //   { name: "Hanako", age: 5 },
//   //   { name: "Saburo", age: 3 }
//   // ]
//   // return(
//   //   <div>
//   //     {
//   //       profiles.map((profile, index) => {
//   //         return <User name={profile.name} age={profile.age} key={index} />
//   //       })
//   //     }
//   //   </div>
//   // )
// }

// const App = () => ( <Counter> </Counter> )

// Reduxを使用する場合は同じ処理をreducerで行うことになるため記述が不要となる
// constructorは初期化処理で実行されるメソッド(コールバック)
// constructor(props){
//   super(props)
//   this.state = {count: 0}
// }

// Reduxを使用する場合は同じ処理をaction creatorで実行しているため不要となる
// handlePlusButton = () => {
//   this.setState({count: this.state.count + 1})
// }
// handleMinusButton = () => {
//   this.setState({count: this.state.count - 1})
// }

// const User = (props) => {
//   return <div>Hi! I am {props.name}!, and {props.age} years old! </div>
// }

// 型チェック
// isRequiredでageという属性が必ず設定されてないと駄目ということになる
// 初めに定義しておくことが重要
// User.propTypes = {
//   name: PropTypes.string,
//   age: PropTypes.number.isRequired
// }

// デフォルト値の設定
// 値が入ってなかったときのデフォルト
// User.defaultProps = {
//   age: 1
// }

// export default App;
