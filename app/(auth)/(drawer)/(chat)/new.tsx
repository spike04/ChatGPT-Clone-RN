import HeaderDropdown from '@/components/HeaderDropdown'
import { defaultStyles } from '@/constants/Styles'
import { useAuth } from '@clerk/clerk-expo'
import { Stack } from 'expo-router'
import React, { useState } from 'react'
import { Button, View } from 'react-native'

const Page = () => {
  const { signOut } = useAuth()
  const [gptVersion, setGptVersion] = useState('3.5')

  return (
    <View style={defaultStyles.pageContainer}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <HeaderDropdown
              title="ChatGPT"
              items={[
                {
                  key: '3.5',
                  title: 'GPT-3.5',
                  icon: 'bolt',
                },
                {
                  key: '4',
                  title: 'GPT-4',
                  icon: 'sparkles',
                },
              ]}
              onSelect={setGptVersion}
              selected={gptVersion}
            />
          ),
        }}
      />

      <Button onPress={() => signOut()} title="Sign Out" />
    </View>
  )
}

export default Page
