import gradeNova from '../gradeNova'

function GradeNova() {

    return (
        <ul>
            {Object.keys(gradeNova).map((disciplina) => (
                <li style={{backgroundColor: gradeNova[disciplina].r ? 'red' : 'white'}}>{disciplina}</li>
            ))}
        </ul>
    )
}

export default GradeNova