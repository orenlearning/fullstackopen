const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <div>
      <Header course={course}/>
      <Content part1={part1} exercises1={exercises1} part2={part2} exercises2={exercises2} part3={part3} exercises3={exercises3}/>
      <Total exercises1={exercises1} exercises2={exercises2} exercises3={exercises3}/>
    </div>
  )
}

const Header = (props) => {
  
  return (
    <div>
      <h1>{props.course}</h1>
    </div>
  )
}

const Content = (props) => {
  return (
    <div>
        <Part exeName={props.part1} numOfExe={props.exercises1}/>
        <Part exeName={props.part2} numOfExe={props.exercises2}/>
        <Part exeName={props.part3} numOfExe={props.exercises3}/>
    </div>
  )
}

const Total = (props) => {
  return (
    <div>
      <p>Number of exercises {props.exercises1 + props.exercises2 + props.exercises3}</p>
    </div>
  )
}

//Exe 1.2
const Part = (props) => {
  return (
    <div>
      <p>
        {props.exeName} {props.numOfExe}
      </p>
    </div>
  )
}

export default App;
