import { Scheduling } from "../../../domain/entity/schedules/types"

interface SchedulesProps {
    schedules: Scheduling[]
}

function Schedules({ schedules }: SchedulesProps) {
    if (!schedules) return (
        <></>
    )

    return (
        <div>
            <div>{schedules[0] && schedules[0].date}</div>
            <div>{schedules[0] && schedules[0].hour}</div>
            <div>{schedules[0] && schedules[0].service}</div>
            <div>{schedules[0] && schedules[0].name}</div>
        </div>
    )
}

export { Schedules }