import TestFrame from "../../../components/frame/TestFrame";
import VideoTestCo from '../../../../assets/videos/VideoTestCo.mp4';

export default function TestStep1() {

    return (
        <TestFrame
            title="KIỂM TRA CƠ"
            img={VideoTestCo}
            textImg={'Thẳng lưng trước ghế, đứng lên\n ngồi xuống 5 lần từ 6-10 giây'}
            textYes="Được"
            textNo="Không được"
        />
    )
}