import React from "react";
import { View, ImageBackground, Text, StyleSheet, ScrollView } from "react-native";
import { connect } from "react-redux";
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from "react-native-responsive-screen";
export class Blank extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render = () => <ScrollView contentContainerStyle={{
    flexGrow: 1
  }} style={styles.ScrollView_1}>
      <View style={styles.View_2} />
      <View style={styles.View_19_12971} />
      <View style={styles.View_19_12984}>
        <Text style={styles.Text_19_12984}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_19_13476}>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1fa6054f-6619-4f18-aafb-df1debfa31c6"
      }} style={styles.ImageBackground_I19_13476_10_3014} />
      </View>
      <View style={styles.View_19_13567}>
        <View style={styles.View_19_13568}>
          <View style={styles.View_19_13569}>
            <Text style={styles.Text_19_13569}>Set up Profile</Text>
          </View>
          <View style={styles.View_19_13570}>
            <Text style={styles.Text_19_13570}>
              Lorem ipsum dolor sit amet.
            </Text>
          </View>
        </View>
        <View style={styles.View_19_13655}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15f53b82-1bcb-4492-b9c8-f89df59ec88b"
        }} style={styles.ImageBackground_19_13656} />
          <View style={styles.View_19_13657}>
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/705dc8cb-c36e-4604-9127-2f927561ef46"
          }} style={styles.ImageBackground_19_13658} />
            <View style={styles.View_19_13659}>
              <Text style={styles.Text_19_13659}>Upload Logo</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_19_13571}>
          <View style={styles.View_19_13572}>
            <View style={styles.View_I19_13572_11_3270}>
              <Text style={styles.Text_I19_13572_11_3270}>Business Name</Text>
            </View>
            <View style={styles.View_I19_13572_11_3271}>
              <View style={styles.View_I19_13572_11_3272}>
                <Text style={styles.Text_I19_13572_11_3272}>
                  Input your business name
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_19_13612}>
            <View style={styles.View_I19_13612_11_3270}>
              <Text style={styles.Text_I19_13612_11_3270}>Email</Text>
            </View>
            <View style={styles.View_I19_13612_11_3271}>
              <View style={styles.View_I19_13612_11_3272}>
                <Text style={styles.Text_I19_13612_11_3272}>
                  Input your email
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_24_14367}>
            <View style={styles.View_I24_14367_11_3270}>
              <Text style={styles.Text_I24_14367_11_3270}>Industry</Text>
            </View>
            <View style={styles.View_I24_14367_11_3271}>
              <View style={styles.View_I24_14367_11_3272}>
                <Text style={styles.Text_I24_14367_11_3272}>
                  Input your industry
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_24_14289}>
            <View style={styles.View_I24_14289_17_11952}>
              <Text style={styles.Text_I24_14289_17_11952}>About</Text>
            </View>
            <View style={styles.View_I24_14289_17_11953}>
              <View style={styles.View_I24_14289_17_11954}>
                <Text style={styles.Text_I24_14289_17_11954}>
                  Input information about your business
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_19_13664}>
            <View style={styles.View_19_13681}>
              <Text style={styles.Text_19_13681}>GEOFENCE</Text>
            </View>
            <View style={styles.View_19_13666}>
              <View style={styles.View_19_13667}>
                <Text style={styles.Text_19_13667}>Address 1</Text>
              </View>
              <View style={styles.View_24_14448}>
                <View style={styles.View_I24_14448_15_5047} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/51b7207a-64d4-4aea-a47f-fe39a08a8276"
              }} style={styles.ImageBackground_I24_14448_15_5048} />
              </View>
            </View>
            <View style={styles.View_19_13671}>
              <View style={styles.View_19_13672}>
                <Text style={styles.Text_19_13672}>Address 2</Text>
              </View>
              <View style={styles.View_24_14455}>
                <View style={styles.View_I24_14455_15_5047} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/78434594-e2a5-4a94-b0ac-f970a6a788e6"
              }} style={styles.ImageBackground_I24_14455_15_5048} />
              </View>
            </View>
            <View style={styles.View_47_10121}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/611f7ac8-7e1f-46b3-8e15-e142fafe921d"
            }} style={styles.ImageBackground_47_10122} />
              <View style={styles.View_47_10123}>
                <Text style={styles.Text_47_10123}>Add Another</Text>
              </View>
            </View>
          </View>
          <View style={styles.View_19_13582}>
            <View style={styles.View_I19_13582_7_555}>
              <Text style={styles.Text_I19_13582_7_555}>Continue</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_19_13894}>
        <View style={styles.View_19_13715}>
          <View style={styles.View_19_13716}>
            <View style={styles.View_19_13717}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a740a826-e4b1-437b-9cdf-582fd3df80c9"
            }} style={styles.ImageBackground_19_13718} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b16edefd-9685-4460-b9ea-1bbf166d9aea"
            }} style={styles.ImageBackground_19_13719} />
            </View>
            <View style={styles.View_19_13721}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5716f768-fbc8-45f5-bbc2-89b2265655c4"
            }} style={styles.ImageBackground_19_13722} />
            </View>
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1700ed4f-f36c-4d62-9386-73f2dc3a5d82"
          }} style={styles.ImageBackground_19_13726} />
          </View>
          <View style={styles.View_19_13728}>
            <View style={styles.View_19_13729}>
              <View style={styles.View_19_13730}>
                <View style={styles.View_19_13731}>
                  <View style={styles.View_19_13732}>
                    <View style={styles.View_19_13733}>
                      <View style={styles.View_19_13734}>
                        <ImageBackground source={{
                        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/005200d0-1457-45d5-a0cb-2013631e797c"
                      }} style={styles.ImageBackground_19_13735} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_19_13737}>
                  <View style={styles.View_19_13738}>
                    <View style={styles.View_19_13739}>
                      <ImageBackground source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/124b1d45-9b64-4341-976b-1f53378e0341"
                    }} style={styles.ImageBackground_19_13740} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_19_13742}>
                  <View style={styles.View_19_13743}>
                    <View style={styles.View_19_13744}>
                      <ImageBackground source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5e24588b-99d5-4a73-9597-72edb628e005"
                    }} style={styles.ImageBackground_19_13745} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_19_13747}>
                  <View style={styles.View_19_13748}>
                    <View style={styles.View_19_13749}>
                      <ImageBackground source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e33b4d0-a0f6-49ad-a63f-63462ce890ee"
                    }} style={styles.ImageBackground_19_13750} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_19_13752}>
                  <View style={styles.View_19_13753}>
                    <View style={styles.View_19_13754}>
                      <ImageBackground source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ace66d32-35d7-4573-bcff-ed1c262086cb"
                    }} style={styles.ImageBackground_19_13755} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
            <View style={styles.View_19_13757}>
              <View style={styles.View_19_13758}>
                <View style={styles.View_19_13759}>
                  <View style={styles.View_19_13760}>
                    <View style={styles.View_19_13761}>
                      <View style={styles.View_19_13762}>
                        <ImageBackground source={{
                        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1cee69a6-3005-4d8d-b980-1b5c50728429"
                      }} style={styles.ImageBackground_19_13763} />
                      </View>
                    </View>
                  </View>
                </View>
                <View style={styles.View_19_13765}>
                  <View style={styles.View_19_13766}>
                    <View style={styles.View_19_13767}>
                      <ImageBackground source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9441483d-fbb4-4d21-8156-0b242f9e7561"
                    }} style={styles.ImageBackground_19_13768} />
                    </View>
                  </View>
                </View>
                <View style={styles.View_19_13770}>
                  <View style={styles.View_19_13771}>
                    <View style={styles.View_19_13772}>
                      <ImageBackground source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/23d135b7-71a1-4ebc-9981-94d69d9df0c0"
                    }} style={styles.ImageBackground_19_13773} />
                    </View>
                  </View>
                </View>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15c37473-2290-44c7-a98d-87a81d2953f3"
              }} style={styles.ImageBackground_19_13775} />
                <View style={styles.View_19_13777}>
                  <View style={styles.View_19_13778}>
                    <View style={styles.View_19_13779}>
                      <ImageBackground source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/71dac36a-4f09-4640-88a6-a2e1b5a4e286"
                    }} style={styles.ImageBackground_19_13780} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6f6eafca-b32e-4dd8-8c80-d4ca3992ac0b"
      }} style={styles.ImageBackground_19_13782} />
        <View style={styles.View_19_13783}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/79a1d79b-06ef-4e45-814d-09c3bb639a2f"
        }} style={styles.ImageBackground_19_13784} />
          <View style={styles.View_19_13785}>
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/84451304-71ec-4342-9e0b-4d92197f183f"
          }} style={styles.ImageBackground_19_13786} />
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/50de0649-10b1-4c15-bb8b-10e38a0b2bce"
          }} style={styles.ImageBackground_19_13788} />
          </View>
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d24d4111-ea21-4fa4-aaa4-a386048fbf3c"
      }} style={styles.ImageBackground_19_13790} />
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d94acca2-d177-4819-bf5f-3fe55f70c8c5"
      }} style={styles.ImageBackground_19_13794} />
        <View style={styles.View_19_13798}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/36035bed-820b-4720-be17-959e3296e0e0"
        }} style={styles.ImageBackground_19_13799} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c4aedf3-8413-48c4-8c3d-037a3394498d"
        }} style={styles.ImageBackground_19_13800} />
          <View style={styles.View_19_13803}>
            <View style={styles.View_19_13804}>
              <View style={styles.View_19_13805}>
                <View style={styles.View_19_13806}>
                  <ImageBackground source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/529c7781-9b26-4dfb-8f77-4655b77732c6"
                }} style={styles.ImageBackground_19_13807} />
                </View>
              </View>
            </View>
            <View style={styles.View_19_13809}>
              <View style={styles.View_19_13810}>
                <View style={styles.View_19_13811}>
                  <View style={styles.View_19_13812}>
                    <View style={styles.View_19_13813}>
                      <ImageBackground source={{
                      uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/351cae77-a0b6-489f-b141-dfb345ab4380"
                    }} style={styles.ImageBackground_19_13814} />
                    </View>
                  </View>
                </View>
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_19_13816}>
          <View style={styles.View_19_13817}>
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1ab26f53-f93f-44e3-a6d4-17d4e0a99e62"
          }} style={styles.ImageBackground_19_13818} />
            <View style={styles.View_19_13820}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/844a14df-e035-4e92-9245-8e4bf40734c6"
            }} style={styles.ImageBackground_19_13821} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a21c9932-d9c4-4417-b738-223708886b34"
            }} style={styles.ImageBackground_19_13823} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c4886150-871a-417e-8598-971bfd10f8c9"
            }} style={styles.ImageBackground_19_13825} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1545849-30ab-4048-b151-b7cb8b04d54c"
            }} style={styles.ImageBackground_19_13827} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8bf510e3-c0d4-4567-b567-5e81bcc83de0"
            }} style={styles.ImageBackground_19_13829} />
              <View style={styles.View_19_13830}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e543ea8b-a8b1-4949-8a8d-44698cadf29a"
              }} style={styles.ImageBackground_19_13831} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b5bf56c4-0401-4ac8-ac01-67035151ce58"
              }} style={styles.ImageBackground_19_13833} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4069d9db-792a-4e58-be8a-fd52cff9c110"
              }} style={styles.ImageBackground_19_13834} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0144962d-0f4b-4b7f-96d0-302cc4c9c493"
              }} style={styles.ImageBackground_19_13836} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d356b34f-9436-4ddb-973f-97c844706fa1"
              }} style={styles.ImageBackground_19_13837} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea81983e-5111-4dab-be8a-8753e67abd57"
              }} style={styles.ImageBackground_19_13839} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/692194ad-61e6-4cce-9f44-de493f263f4a"
              }} style={styles.ImageBackground_19_13841} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bc78c719-9c0c-4d93-b6e4-fb8dc5367d29"
              }} style={styles.ImageBackground_19_13843} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f7fa8684-f424-4722-ba9a-55d2dacbbdbe"
              }} style={styles.ImageBackground_19_13845} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/453cec68-85eb-427b-9b9f-49865d752952"
              }} style={styles.ImageBackground_19_13847} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9fa24cc4-6213-46ae-b102-2d2fdc7edd31"
              }} style={styles.ImageBackground_19_13848} />
              </View>
              <View style={styles.View_19_13849}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2f6e35b4-d2f1-48ca-b925-621af72e4ef8"
              }} style={styles.ImageBackground_19_13850} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/61dd81be-0d01-4ed6-9f6d-da567cd94db9"
              }} style={styles.ImageBackground_19_13851} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7f24df8f-717a-45ee-939a-f0b65ed5baa9"
              }} style={styles.ImageBackground_19_13862} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/57c85a96-9eea-4aa7-82c7-98b5be90c916"
              }} style={styles.ImageBackground_19_13870} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a183ee0-42c5-40f4-8c5c-7d0508518ba2"
              }} style={styles.ImageBackground_19_13871} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3b6bc108-6918-4a8b-8d0f-732618575014"
              }} style={styles.ImageBackground_19_13872} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/858c265f-287a-47bf-acf8-2fca4c247e49"
              }} style={styles.ImageBackground_19_13874} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5b8b1592-e96c-4c3e-bd3d-a466c893c030"
              }} style={styles.ImageBackground_19_13875} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b6220f5b-47ac-4d3a-ba4c-27cb18432e6e"
              }} style={styles.ImageBackground_19_13877} />
              </View>
              <View style={styles.View_19_13879}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/598119cb-83f8-4199-8d91-fec03255622f"
              }} style={styles.ImageBackground_19_13880} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/02d55e4a-855c-4a96-856c-01e0d7ca0a7f"
              }} style={styles.ImageBackground_19_13882} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/595a1caf-ffcd-415d-a1c5-aa563758a75d"
              }} style={styles.ImageBackground_19_13883} />
              </View>
              <View style={styles.View_19_13884}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a91787b5-dbd6-4495-b2eb-960ce62eb6f0"
              }} style={styles.ImageBackground_19_13885} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c78da5b1-7ab8-401c-bb4f-5779ff77e097"
              }} style={styles.ImageBackground_19_13886} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ad84c5a2-1b43-4f1a-b8c4-9356ff97d2ea"
              }} style={styles.ImageBackground_19_13888} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eff120ae-57f1-42a3-9b19-73f41240881f"
              }} style={styles.ImageBackground_19_13890} />
              </View>
            </View>
          </View>
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/24ddff6e-1343-4439-835b-68e986d44b69"
      }} style={styles.ImageBackground_19_13892} />
      </View>
      <View style={styles.View_45_12833}>
        <View style={styles.View_45_12834}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d834de1-0e0c-4b28-8f35-93c74447d1bf"
        }} style={styles.ImageBackground_45_12835} />
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/455e9520-d903-48db-823d-a6e1174e32d2"
      }} style={styles.ImageBackground_45_12841} />
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2: {
    height: hp("167%")
  },
  View_19_12971: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("167%"),
    minHeight: hp("167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(238, 238, 238, 1)",
    borderTopLeftRadius: 0,
    borderTopRightRadius: 20,
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 0
  },
  View_19_12984: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("14%"),
    justifyContent: "flex-start"
  },
  Text_19_12984: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13476: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("51%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I19_13476_10_3014: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_19_13567: {
    width: wp("33%"),
    height: hp("139%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("19%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_13568: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("9%"),
    minHeight: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_19_13569: {
    width: wp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_13569: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13570: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_19_13570: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13655: {
    width: wp("10%"),
    minWidth: wp("10%"),
    height: hp("20%"),
    minHeight: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_19_13656: {
    width: wp("9%"),
    height: hp("17%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_19_13657: {
    width: wp("6%"),
    minWidth: wp("6%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("7%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_19_13658: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_19_13659: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("4%"),
    justifyContent: "flex-start"
  },
  Text_19_13659: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 11,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13571: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("99%"),
    minHeight: hp("99%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_13572: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_13572_11_3270: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_13572_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_13572_11_3271: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_13572_11_3272: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_13572_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13612: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_13612_11_3270: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I19_13612_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I19_13612_11_3271: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I19_13612_11_3272: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_13612_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_14367: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("27%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_14367_11_3270: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I24_14367_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_14367_11_3271: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_14367_11_3272: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I24_14367_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_24_14289: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("17%"),
    minHeight: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_14289_17_11952: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I24_14289_17_11952: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I24_14289_17_11953: {
    flexGrow: 1,
    width: wp("33%"),
    height: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_14289_17_11954: {
    width: wp("31%"),
    minWidth: wp("31%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I24_14289_17_11954: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13664: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("27%"),
    minHeight: hp("27%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("61%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_13681: {
    width: wp("22%"),
    minWidth: wp("22%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_19_13681: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 9,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 1.5,
    textTransform: "none"
  },
  View_19_13666: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("5%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_13667: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_19_13667: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_24_14448: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_14448_15_5047: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  ImageBackground_I24_14448_15_5048: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_19_13671: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_19_13672: {
    width: wp("5%"),
    minWidth: wp("5%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_19_13672: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.30000001192092896,
    textTransform: "none"
  },
  View_24_14455: {
    width: wp("3%"),
    minWidth: wp("3%"),
    height: hp("6%"),
    minHeight: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I24_14455_15_5047: {
    flexGrow: 1,
    width: wp("3%"),
    height: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  ImageBackground_I24_14455_15_5048: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("1%")
  },
  View_47_10121: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("23%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  ImageBackground_47_10122: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_47_10123: {
    flexGrow: 1,
    width: wp("5%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28%"),
    top: hp("1%"),
    justifyContent: "flex-start"
  },
  Text_47_10123: {
    color: "rgba(58, 176, 73, 1)",
    fontSize: 10,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13582: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("91%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I19_13582_7_555: {
    flexGrow: 1,
    width: wp("29%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I19_13582_7_555: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_19_13894: {
    width: wp("31%"),
    minWidth: wp("31%"),
    height: hp("61%"),
    minHeight: hp("61%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("55%")
  },
  View_19_13715: {
    width: wp("18%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_19_13716: {
    width: wp("18%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13717: {
    width: wp("18%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13718: {
    width: wp("18%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13719: {
    width: wp("18%"),
    height: hp("58%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13721: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_19_13722: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13726: {
    width: wp("13%"),
    height: hp("0%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_19_13728: {
    width: wp("18%"),
    height: hp("14%"),
    top: hp("43%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13729: {
    width: wp("18%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13730: {
    width: wp("18%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13731: {
    width: wp("18%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13732: {
    width: wp("18%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13733: {
    width: wp("18%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13734: {
    width: wp("18%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13735: {
    width: wp("18%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13737: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_19_13738: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13739: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13740: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13742: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_19_13743: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13744: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13745: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13747: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_19_13748: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13749: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13750: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13752: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_19_13753: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13754: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13755: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13757: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13758: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13759: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13760: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13761: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13762: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13763: {
    width: wp("17%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13765: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_19_13766: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13767: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13768: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13770: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_19_13771: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13772: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13773: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13775: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_19_13777: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_19_13778: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13779: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13780: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13782: {
    width: wp("16%"),
    height: hp("40%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_19_13783: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_19_13784: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13785: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_19_13786: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13788: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13790: {
    width: wp("5%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_19_13794: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  View_19_13798: {
    width: wp("14%"),
    height: hp("26%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_19_13799: {
    width: wp("14%"),
    height: hp("26%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13800: {
    width: wp("12%"),
    height: hp("20%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_19_13803: {
    width: wp("12%"),
    height: hp("18%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_19_13804: {
    width: wp("12%"),
    height: hp("17%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13805: {
    width: wp("12%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13806: {
    width: wp("12%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13807: {
    width: wp("12%"),
    height: hp("17%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13809: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_19_13810: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13811: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13812: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13813: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13814: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13816: {
    width: wp("26%"),
    height: hp("57%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_19_13817: {
    width: wp("26%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13818: {
    width: wp("26%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13820: {
    width: wp("26%"),
    height: hp("57%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13821: {
    width: wp("7%"),
    height: hp("20%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_19_13823: {
    width: wp("7%"),
    height: hp("48%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_19_13825: {
    width: wp("4%"),
    height: hp("23%"),
    top: hp("47%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_19_13827: {
    width: wp("8%"),
    height: hp("49%"),
    top: hp("38%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16%")
  },
  ImageBackground_19_13829: {
    width: wp("13%"),
    height: hp("32%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  View_19_13830: {
    width: wp("4%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13%")
  },
  ImageBackground_19_13831: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_19_13833: {
    width: wp("2%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_19_13834: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13836: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13837: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13839: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_19_13841: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_19_13843: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_19_13845: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_19_13847: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_19_13848: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_19_13849: {
    width: wp("17%"),
    height: hp("13%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13850: {
    width: wp("8%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_19_13851: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_19_13862: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_19_13870: {
    width: wp("2%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_19_13871: {
    width: wp("10%"),
    height: hp("13%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13872: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13874: {
    width: wp("9%"),
    height: hp("1%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_19_13875: {
    width: wp("7%"),
    height: hp("0%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_19_13877: {
    width: wp("7%"),
    height: hp("9%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_19_13879: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%")
  },
  ImageBackground_19_13880: {
    width: wp("11%"),
    height: hp("7%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13882: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_19_13883: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_19_13884: {
    width: wp("7%"),
    height: hp("21%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_19_13885: {
    width: wp("7%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13886: {
    width: wp("6%"),
    height: hp("19%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_19_13888: {
    width: wp("2%"),
    height: hp("8%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_19_13890: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_19_13892: {
    width: wp("30%"),
    height: hp("0%"),
    top: hp("60%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_45_12833: {
    width: wp("22%"),
    minWidth: wp("22%"),
    height: hp("5%"),
    minHeight: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("62%"),
    top: hp("10%")
  },
  View_45_12834: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12835: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12841: {
    width: wp("11%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  }
});

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = () => {
  return {};
};

export default connect(mapStateToProps, mapDispatchToProps)(Blank);