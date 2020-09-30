import React from 'react';
import { Button, ScrollView, StyleSheet, Text, View } from 'react-native';
import * as Updates from 'expo-updates';

import { Wrapper } from './styled';

const ErrorFallback = props => (
  <Wrapper>
    <ScrollView>
      <View style={styles.errorMessageContainer}>
        <Text style={styles.messageText}>
          The following error was caught by an ErrorBoundary and sent to
          Bugsnag.
        </Text>
        <Button title="Reload" onPress={() => Updates.reload()} />
        <Text style={styles.errorStackText}>{props.error.message}</Text>
        <Text style={styles.errorStackText}>{props.info.componentStack}</Text>
      </View>
    </ScrollView>
  </Wrapper>
);

const styles = StyleSheet.create({
  errorMessageContainer: {
    marginTop: 70,
    marginBottom: 50,
    marginLeft: 20,
    marginRight: 20,
  },
  messageText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    marginBottom: 10,
  },
  errorStackText: {
    fontFamily: 'space-mono',
    marginTop: 20,
    fontSize: 11,
  },
});

export default ErrorFallback;
