import { View, Text } from 'react-native'
import React from 'react'
import { StyleSheet } from 'react-native'
import styles from './src/Form/style'
import { TextInput, Button, Image } from 'react-native'

export default function App() {
  return (
    <View style={styles.form}>
      <View style={styles.background}>
          <Text style={styles.nomeusuario}> Olá, Felipe Melo</Text>          
            <TextInput style={styles.procurar}> Procurar.. </TextInput>
            <View style={styles.espaco}></View>
              
              <View style={styles.cartao}>
                <Text style={styles.cartaodecredito}>Cartão de Crédito</Text>
                <Text style={styles.fatura}>Fatura</Text>
                <Text style={styles.dinheiro}>R$ 1.500,00</Text>
                <Text style={styles.pagarfatura}> Pagar Fatura </Text>
              </View>
                
                <View style={styles.espaco}></View>
                  <View style={styles.cartao}>
                    <Text style={styles.cartaodecredito}>Conta</Text>
                    <Text style={styles.fatura}>Saldo disponivel</Text>
                    <Text style={styles.dinheiro}> R$ 300,00 </Text>
                    <Text style={styles.pagarfatura}> Transferir </Text>
                  </View>

                  <View style={styles.espaco}>
                    <Text style={styles.meuscartoes}>Meus cartões</Text>
                  </View>
              
              
      
      </View>
   
    </View>
  )
}