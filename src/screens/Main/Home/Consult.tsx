import { StyleSheet, Text, View } from 'react-native'

import React, { useState, useCallback, useEffect } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import MainView from '../../../Globals/MainView';
import HeaderBack from '../../../components/main/settings/HeaderBack';



const Consult = () => {
  const [messages, setMessages] = useState<Array<Object>>([]);
  
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello developer',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
        },
        sent:true,
        received:true
      },
    ])
  }, []);

  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, []);

  return (
    <MainView>
      <HeaderBack title='Private Consultation'/>
      <GiftedChat
        messages={messages}
        onSend={messages => onSend(messages)}
        user={{
          _id: 1,
        }}
        isTyping={false}
        showUserAvatar={false}
        
      />
    </MainView>
  )
}

export default React.memo(Consult);

const styles = StyleSheet.create({})