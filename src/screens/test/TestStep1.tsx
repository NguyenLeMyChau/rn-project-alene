import TestFrame from "./TestFrame";
import ImageTestCo from '../../../assets/test-co.png';

export default function TestStep1() {

    return (
        <TestFrame
            title="KIỂM TRA CƠ"
            img={ImageTestCo}
            textImg={'Thẳng lưng trước ghế, đứng lên\n ngồi xuống 5 lần từ 6-10 giây'}
            textYes="Được"
            textNo="Không được"
            nextStep="TestStep2"
        />
    )
}