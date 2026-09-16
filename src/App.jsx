import Student from "./Student.jsx"

function App(){
    return(
        <>
            <Student name="Spongebob" age={35} isStudent={true}/>
            <Student name="Patrick" age={42} isStudent={false}/>
            <Student name="Cindy" age={27} isStudent={true}/>
        </>
    );
}

export default App 