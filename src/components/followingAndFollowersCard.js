import React, { useContext } from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { Colors, Fonts, Default } from "../constants/styles2";
import { LinearGradient } from "expo-linear-gradient";
import { useTranslation } from "react-i18next";
import ThemeContext from "../theme/ThemeContext";

const FollowingAndFollowersCard = (props) => {

  const theme = useContext(ThemeContext)

  const { t, i18n } = useTranslation();

  const isRtl = i18n.dir() == "rtl";

  function tr(key) {
    return t(`followingAndFollowersCard:${key}`);
  }

  return (
    <View
      style={{
        flexDirection: isRtl ? "row-reverse" : "row",
        marginBottom: Default.fixPadding * 2.5,
        marginHorizontal: Default.fixPadding * 2,
      }}
    >
      <View
        style={{
          flex: 7,
          flexDirection: isRtl ? "row-reverse" : "row",
          alignItems: "center",
        }}
      >
        <Image
          source={props.image}
          style={{
            resizeMode: "cover",
            width: 50,
            height: 50,
            borderRadius: 10,
          }}
        />
        <View style={{ marginHorizontal: Default.fixPadding }}>
          <Text
            numberOfLines={1}
            style={{ ...Fonts.SemiBold14white, color: theme.color, overflow: "hidden" }}
          >
            {props.name}
          </Text>
          <Text
            numberOfLines={1}
            style={{ ...Fonts.Medium12grey, overflow: "hidden" }}
          >{`${tr("followers")} ${props.followers}`}</Text>
        </View>
      </View>

      <View
        style={{
          flex: 3,
          justifyContent: "center",
          alignItems: isRtl ? "flex-start" : "flex-end",
        }}
      >
        {props.follow ? (
          <TouchableOpacity
            onPress={() => props.onClickHandler()}
            style={{ ...Default.shadowBtn }}
          >
            <LinearGradient
              start={[0, 1]}
              end={[1, 1]}
              colors={[Colors.primary, Colors.extraDarkPrimary]}
              style={{
                justifyContent: "center",
                alignItems: "center",
                paddingVertical: Default.fixPadding * 0.5,
                borderRadius: 10,
              }}
            >
              <Text
                numberOfLines={1}
                style={{
                  ...Fonts.SemiBold14white,
                  overflow: "hidden",
                  paddingHorizontal: Default.fixPadding * 2.2,
                }}
              >
                {tr("follow")}
              </Text>
            </LinearGradient>
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            onPress={() => props.onClickHandler()}
            style={{
              justifyContent: "center",
              alignItems: "center",
              paddingVertical: Default.fixPadding * 0.5,
              borderRadius: 10,
              backgroundColor: Colors.extraDarkGrey,
            }}
          >
            <Text
              numberOfLines={1}
              style={{
                ...Fonts.SemiBold14white,
                overflow: "hidden",
                paddingHorizontal: Default.fixPadding * 1.2,
              }}
            >
              {tr("following")}
            </Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
};

export default FollowingAndFollowersCard;
