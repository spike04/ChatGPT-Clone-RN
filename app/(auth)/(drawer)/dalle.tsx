import { View, Text } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import HeaderDropdown from '@/components/HeaderDropdown'
import { Stack } from 'expo-router'

const Dalle = () => {
  return (
    <View style={defaultStyles.pageContainer}>
      <Stack.Screen
        options={{
          headerTitle: () => (
            <HeaderDropdown
              title="Dall•E"
              items={[
                {
                  key: 'share',
                  title: 'Share GPT',
                  icon: 'square.and.arrow.up',
                },
                { key: 'details', title: 'See Details', icon: 'info.circle' },
                { key: 'keep', title: 'Keep in Sidebar', icon: 'pin' },
              ]}
              onSelect={() => {}}
            />
          ),
        }}
      />
      <Text>Dalle</Text>
    </View>
  )
}

export default Dalle
