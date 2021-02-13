import React from 'react';
import { View, StyleSheet, Modal, Text } from 'react-native';
import * as Progress from 'react-native-progress';
import colors from '../config/colors';
import LottieView from 'lottie-react-native';

function uploadScreen({ onDone, progress = 0, visible = false}) {
    return (
        <Modal visible={visible}>
            <View style={styles.container}>
                {/* so because our progress state is calculated from 0 to 1 */}
                {/* we say if our progress is less than 1 then it is still posting/uploading to the backend */}
                {/* so we render the progress bar, so if it is equal to 1 (p.s) it cant be greater than 1 */}
                {/* then we render the lottieView done animation */}
                { progress < 1 ? (
                    <Progress.Bar progress={progress} color={colors.primary} width={200} /> 
                    ) : (
                        <LottieView 
                            autoPlay
                            loop={false}
                            onAnimationFinish={onDone}
                            source={require('../assets/animations/done.json')}
                            style={styles.animation}
                        />
                    )
                }
                <Text>{progress * 100} %</Text>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    animation: {
        width: 350
    },
    container: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
    },
})

export default uploadScreen;