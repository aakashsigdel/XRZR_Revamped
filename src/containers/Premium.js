import React, { View, StyleSheet } from 'react-native'
import Mixpanel, * as MixpanelConfig from '../constants/MixPanelConfigs'
import PremiumIndex from '../components/Premium/PremiumIndex'

class Premium extends React.Component {
  componentDidMount () {
    Mixpanel.track(MixpanelConfig.PREMIUM_VIEW)
  }
  render (props) {

    const onClosePressed = props.navigator.pop
    const onUpgradeMonthly = () => {
      Mixpanel.track(MixpanelConfig.PREMIUM_BUY)
    }
    const onUpgradeYearly = () => {
      Mixpanel.track(MixpanelConfig.PREMIUM_BUY)
    }

    return (
      <PremiumIndex
        onClosePressed={onClosePressed}
        onUpgradeMonthly={onUpgradeMonthly}
        onUpgradeYearly={onUpgradeYearly}
      />
    )
  }
}

const styles = StyleSheet.create({
  container: {}
})

export default Premium