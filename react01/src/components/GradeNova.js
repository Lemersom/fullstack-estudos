import gradeNova from '../gradeNova'

function GradeNova() {

    const grade = Object.keys(gradeNova).map(key => [key])

    return (
        <ul>
            {grade.map((item) => <li>{item}</li>)}
        </ul>
    )
}

export default GradeNova