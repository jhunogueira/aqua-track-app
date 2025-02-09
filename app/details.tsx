import { Stack } from 'expo-router';
import { useState } from 'react';
import {
  Text,
  StyleSheet,
  SafeAreaView,
  View,
  TextInput,
  ScrollView,
  TouchableOpacity,
  KeyboardAvoidingView,
  Alert,
} from 'react-native';

export default function Details() {
  const [weight, setWeight] = useState('');
  const [dailyWaterIntake, setDailyWaterIntake] = useState<string | null>(null);

  const calculateWaterIntake = () => {
    const weightNum = parseFloat(weight);
    if (!isNaN(weightNum) && weightNum > 0) {
      const waterIntake = weightNum * 0.035;
      setDailyWaterIntake(waterIntake.toFixed(2));
      Alert.alert(
        'Consumo Diário de Água',
        `Você deve ingerir ${waterIntake.toFixed(2)} litros de água por dia`
      );
    } else {
      setDailyWaterIntake(null);
    }
  };

  return (
    <>
      <Stack.Screen options={{ title: 'Adicionar nova meta' }} />
      <SafeAreaView style={styles.container}>
        <KeyboardAvoidingView behavior="padding" keyboardVerticalOffset={100}>
          <ScrollView keyboardShouldPersistTaps="handled" style={styles.textContainer}>
            <Text style={styles.title}>Calcular consumo diário de água</Text>
            <View style={styles.formContainer}>
              <View style={styles.inputContainer}>
                <Text style={styles.text}>Peso (kg)</Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  placeholder="Insira o seu peso em quilogramas"
                />
              </View>

              <TouchableOpacity style={styles.button} onPress={calculateWaterIntake}>
                <Text style={styles.buttonText}>Calcular</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.dividerContainer}>
              <View style={styles.divider} />
              <Text style={{ color: '#d1d5db', fontSize: 16, paddingHorizontal: 12 }}>ou</Text>
              <View style={styles.divider} />
            </View>
            <Text style={styles.title}>Adicionar manualmente</Text>
            <View style={[styles.formContainer, { marginBottom: 40 }]}>
              <View style={styles.inputContainer}>
                <Text style={styles.text}>Quantidade (L)</Text>
                <TextInput
                  keyboardType="numeric"
                  style={styles.input}
                  placeholder="Consumo diário em litros"
                  value={weight}
                  onChangeText={setWeight}
                />
              </View>
              <TouchableOpacity style={styles.button}>
                <Text style={styles.buttonText}>Adicionar meta</Text>
              </TouchableOpacity>
            </View>
          </ScrollView>
        </KeyboardAvoidingView>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textContainer: {
    padding: 20,
  },
  title: {
    fontSize: 20,
    marginTop: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  formContainer: {
    width: '100%',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
    gap: 20,
    marginTop: 30,
  },
  inputContainer: {
    gap: 10,
  },
  text: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    width: '100%',
    padding: 10,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  button: {
    width: '100%',
    padding: 14,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    backgroundColor: '#9B89B3',
  },
  buttonText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#fff',
  },
  dividerContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingTop: 40,
    paddingBottom: 20,
    width: '100%',
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#d1d5db',
  },
  plusButton: {
    padding: 10,

    borderRadius: 5,
    backgroundColor: '#9B89B3',
    marginLeft: 10,
  },
});
