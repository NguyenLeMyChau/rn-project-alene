import { Modal, StyleSheet, Text, View } from 'react-native';
import ButtonCheck from '../button/ButtonCheck';
import ConfettiCannon from 'react-native-confetti-cannon';
import { useEffect, useState } from 'react';

type PopupProps = {
    visible: boolean;
    onClose: () => void;
    title: string;
    textbody: string;
    buttonTextYes: string;
};

export default function Popup({ visible = true, onClose, title, textbody, buttonTextYes }: PopupProps) {
    const [showConfetti, setShowConfetti] = useState(false);

    useEffect(() => {
        if (visible) {
            setShowConfetti(true);
            setTimeout(() => setShowConfetti(false), 5000);  
        }
    }, [visible]);

    return (
        <Modal
            visible={visible}
            animationType="slide"
            transparent={true}
            onRequestClose={onClose}
        >
            <View style={styles.overlay}>

                <View style={styles.popup}>
                    <Text style={styles.title}>{title}</Text>
                    <Text style={styles.textbody}>{textbody}</Text>

                    <View style={styles.button}>
                        <ButtonCheck text='HUỶ' backgroundColor='white' borderColor='#B70002' color='#B70002' onPress={onClose} />

                        <ButtonCheck text={buttonTextYes} />
                    </View>

                </View>
                {showConfetti && <ConfettiCannon count={200} origin={{ x: -10, y: 0 }} />}
            </View>

        </Modal>
    );
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },

    popup: {
        backgroundColor: 'white',
        marginHorizontal: 25,
        padding: 20,
        borderRadius: 14
    },

    title: {
        fontSize: 24,
        fontWeight: '700',
        textAlign: 'center',
        color: '#478449',
        paddingBottom: 10
    },

    textbody: {
        fontSize: 14,
        fontWeight: '400',
        textAlign: 'center',
        lineHeight: 18
    },

    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    }
});