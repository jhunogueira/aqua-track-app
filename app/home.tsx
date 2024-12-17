import { useRoute } from '@react-navigation/native';
import { Stack, Link } from 'expo-router';
import { SafeAreaView, ScrollView, View, TouchableOpacity, Text, StyleSheet } from 'react-native';

export default function Home() {
  return (
    <>
      <Stack.Screen name="Home" options={{ title: 'Home', headerShown: false }} />
      <SafeAreaView style={styles.container}>
        <ScrollView keyboardShouldPersistTaps="handled" style={styles.textContainer}>
          <View style={styles.headerContainer}>
            <View style={styles.avatarContainer}>
              <Text style={{ color: '#fff', fontSize: 20 }}>J</Text>
            </View>
            <View style={{ gap: 6 }}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>Olá, Jhulia!</Text>
              <Text style={styles.text}>Vamos tomar água?</Text>
            </View>
          </View>

          <View style={styles.dailyContainer}>
            <Text style={styles.title}>Resumo do dia</Text>
          </View>

          <View style={{ display: 'flex', flexDirection: 'row', gap: 18, flexWrap: 'wrap' }}>
            <View style={styles.actionContainer}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>Meta diária:</Text>
              <Text style={styles.text}>2 litros</Text>
              <Link href={{ pathname: '/details' }} asChild>
                <TouchableOpacity style={styles.button}>
                  <Text style={styles.buttonText}>Nova meta</Text>
                </TouchableOpacity>
              </Link>
            </View>
            <TouchableOpacity
              style={[
                styles.actionContainer,
                {
                  backgroundColor: '#9B89B3',
                  maxWidth: '50%',
                  alignItems: 'center',
                  justifyContent: 'center',
                },
              ]}>
              <Text style={[styles.text, { fontWeight: 'bold', color: '#fff', fontSize: 22 }]}>
                Hora de tomar água!
              </Text>
            </TouchableOpacity>
          </View>

          <View style={styles.divider} />

          <View style={styles.listContainer}>
            <View style={{ gap: 6 }}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>
                Sua garrafa está quase vazia!
              </Text>
              <Text style={styles.text}>Faltam 500 mL para atingir sua meta</Text>
            </View>
          </View>
          <View style={[styles.listContainer, { backgroundColor: '#E9FFDC' }]}>
            <View style={{ gap: 6 }}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>Parabéns!</Text>
              <Text style={styles.text}>Você concluiu sua meta diária</Text>
            </View>
          </View>
          <View style={[styles.listContainer, { backgroundColor: '#FFDEDA' }]}>
            <View style={{ gap: 6 }}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>Já estamos na metade do dia</Text>
              <Text style={styles.text}>Você só tomou 200 mL de água hoje</Text>
            </View>
          </View>
          <View style={styles.listContainer}>
            <View style={{ gap: 6 }}>
              <Text style={[styles.text, { fontWeight: 'bold' }]}>Sua garrafa está vazia</Text>
              <Text style={styles.text}>Encha novamente para concluir sua meta diária</Text>
            </View>
          </View>
        </ScrollView>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
    backgroundColor: '#EFE8F5',
    padding: 20,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  dailyContainer: {
    alignItems: 'center',
    width: '100%',
    padding: 20,
    paddingBottom: 180,
    marginTop: 27,
    marginBottom: 27,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#d1d5db',
  },
  actionContainer: {
    flex: 1,
    gap: 6,
    padding: 16,
    borderWidth: 1,
    borderColor: '#d1d5db',
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#4B4453',
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
    color: '#4B4453',
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
    padding: 10,
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
  divider: {
    flex: 1,
    height: 1,
    marginVertical: 27,
    backgroundColor: '#d1d5db',
  },
  avatarContainer: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#9B89B3',
    alignItems: 'center',
    justifyContent: 'center',
  },
  listContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
    width: '100%',
    backgroundColor: '#FEF6FF',
    padding: 20,
    borderRadius: 2,
    marginBottom: 16,
  },
});
