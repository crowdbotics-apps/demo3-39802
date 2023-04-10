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
      <View style={styles.View_8_4996} />
      <View style={styles.View_8_5236}>
        <Text style={styles.Text_8_5236}>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint.
        </Text>
      </View>
      <View style={styles.View_8_5247}>
        <View style={styles.View_8_5248}>
          <View style={styles.View_I8_5248_8_4782}>
            <Text style={styles.Text_I8_5248_8_4782}>Sign Up</Text>
          </View>
          <View style={styles.View_I8_5248_8_4783} />
        </View>
        <View style={styles.View_8_5249}>
          <View style={styles.View_I8_5249_8_4802}>
            <Text style={styles.Text_I8_5249_8_4802}>Sign In</Text>
          </View>
        </View>
      </View>
      <View style={styles.View_8_5253}>
        <View style={styles.View_8_5254}>
          <View style={styles.View_8_5255}>
            <Text style={styles.Text_8_5255}>Sign Up</Text>
          </View>
          <View style={styles.View_8_5256}>
            <Text style={styles.Text_8_5256}>Lorem ipsum dolor sit amet.</Text>
          </View>
        </View>
        <View style={styles.View_8_5257}>
          <View style={styles.View_11_4498}>
            <View style={styles.View_I11_4498_11_3270}>
              <Text style={styles.Text_I11_4498_11_3270}>Email</Text>
            </View>
            <View style={styles.View_I11_4498_11_3271}>
              <View style={styles.View_I11_4498_11_3272}>
                <Text style={styles.Text_I11_4498_11_3272}>
                  Input your email
                </Text>
              </View>
            </View>
          </View>
          <View style={styles.View_11_4512}>
            <View style={styles.View_11_4513}>
              <Text style={styles.Text_11_4513}>Password</Text>
            </View>
            <View style={styles.View_11_4514}>
              <View style={styles.View_11_4515}>
                <Text style={styles.Text_11_4515}>
                  Create a strong password
                </Text>
              </View>
              <View style={styles.View_11_4516}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/06377348-e2b7-4ec8-ac53-8a0b948649da"
              }} style={styles.ImageBackground_I11_4516_10_3043} />
              </View>
            </View>
            <View style={styles.View_11_4517}>
              <View style={styles.View_11_4518}>
                <View style={styles.View_11_4519}>
                  <Text style={styles.Text_11_4519}>
                    Must be more than 8 characters and contain at least one
                    capital letter, one number and one special character
                  </Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_11_4532}>
            <View style={styles.View_I11_4532_11_4523}>
              <Text style={styles.Text_I11_4532_11_4523}>Confirm Password</Text>
            </View>
            <View style={styles.View_I11_4532_11_4524}>
              <View style={styles.View_I11_4532_11_4525}>
                <Text style={styles.Text_I11_4532_11_4525}>
                  Confirm password
                </Text>
              </View>
              <View style={styles.View_I11_4532_11_4526}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3694f58-3656-4138-9f09-eee5702188c5"
              }} style={styles.ImageBackground_I11_4532_11_4526_10_3043} />
              </View>
            </View>
          </View>
          <View style={styles.View_11_4539}>
            <View style={styles.View_I11_4539_7_553}>
              <Text style={styles.Text_I11_4539_7_553}>Sign Up</Text>
            </View>
          </View>
          <View style={styles.View_8_5335}>
            <View style={styles.View_8_5336}>
              <View style={styles.View_I8_5336_8_5308} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a2cb4aeb-bc48-49eb-b4e0-6937f7e21c78"
            }} style={styles.ImageBackground_I8_5336_8_5309} />
            </View>
            <View style={styles.View_8_5337}>
              <Text style={styles.Text_8_5337}>
                I have read Terms &amp; Conditions and Privacy Policy
              </Text>
            </View>
          </View>
          <View style={styles.View_11_4541}>
            <View style={styles.View_11_4542}>
              <View style={styles.View_I11_4542_8_5311} />
            </View>
            <View style={styles.View_11_4543}>
              <Text style={styles.Text_11_4543}>Remember me</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_11_4855}>
        <View style={styles.View_11_4856}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/3648088d-0eb3-4414-8261-eda1d7e37aa8"
        }} style={styles.ImageBackground_11_4857} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6310a416-582a-47f1-985d-6a67d8a342d8"
        }} style={styles.ImageBackground_11_4859} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/eafa042d-1922-4e13-b3bc-a01f9ae02bed"
        }} style={styles.ImageBackground_11_4861} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/514a2e86-6882-4af9-904e-16fb1f97fa8d"
        }} style={styles.ImageBackground_11_4863} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4a1baf34-192e-462f-a4d7-b5c555822f44"
        }} style={styles.ImageBackground_11_4865} />
          <View style={styles.View_11_4867}>
            <View style={styles.View_11_4868}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7c52c388-3135-4478-a3d2-e447a47aac37"
            }} style={styles.ImageBackground_11_4869} />
            </View>
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/25b215ea-ba61-438d-b410-d45141f3316d"
          }} style={styles.ImageBackground_11_4871} />
          </View>
        </View>
        <View style={styles.View_11_4873}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ba514c39-ada8-45da-85fb-b3febf825296"
        }} style={styles.ImageBackground_11_4874} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/423d88de-a33e-4d86-896c-4d26559d6406"
        }} style={styles.ImageBackground_11_4876} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/82cf3ef5-e138-42fd-8535-ad0da67fc6b0"
        }} style={styles.ImageBackground_11_4878} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/057ff11c-3286-4914-abd9-08edaeae0513"
        }} style={styles.ImageBackground_11_4880} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e7be7534-a7d9-4358-a925-4af602c6d140"
        }} style={styles.ImageBackground_11_4882} />
          <View style={styles.View_11_4884}>
            <View style={styles.View_11_4885}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d588f21c-6e6c-4330-9195-0b1e643e1087"
            }} style={styles.ImageBackground_11_4886} />
            </View>
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/011878ca-c95f-4311-bcf2-11c097f32c88"
          }} style={styles.ImageBackground_11_4888} />
          </View>
        </View>
        <View style={styles.View_11_4890}>
          <View style={styles.View_11_4891}>
            <View style={styles.View_11_4892}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/07fe34df-3173-4c71-bf27-d82d36a73fd8"
            }} style={styles.ImageBackground_11_4893} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bce28bc8-cde5-44b8-a638-16394c573767"
            }} style={styles.ImageBackground_11_4894} />
            </View>
            <View style={styles.View_11_4896}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42347fc6-d89b-488b-82d8-1bd5c76ac991"
            }} style={styles.ImageBackground_11_4897} />
            </View>
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c1e58c22-79f6-4b1c-adb8-0f65d6096a9a"
          }} style={styles.ImageBackground_11_4901} />
          </View>
          <View style={styles.View_11_4903}>
            <View style={styles.View_11_4904}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/28c61c8e-334f-4826-ad05-0969c7035d8c"
            }} style={styles.ImageBackground_11_4905} />
              <View style={styles.View_11_4907}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ea4852e7-e17b-44da-8d32-9d990f52c214"
              }} style={styles.ImageBackground_11_4908} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e1374b60-36e6-494f-9c97-8e277e79b875"
              }} style={styles.ImageBackground_11_4910} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e9db5d0b-df93-4cbb-9776-2df979b09def"
              }} style={styles.ImageBackground_11_4912} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/428f3301-ad4f-4b91-93f3-bce5b5d397e4"
              }} style={styles.ImageBackground_11_4913} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/40ca9180-3f03-4417-941a-80f7f5b685e0"
              }} style={styles.ImageBackground_11_4915} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c70b3b6-b916-4e75-8ed8-1660cb2f7611"
              }} style={styles.ImageBackground_11_4916} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9a659fd5-7e6f-4158-861a-521e83de85c1"
              }} style={styles.ImageBackground_11_4919} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b008b7ac-d330-45c3-bccb-bc389696b9ee"
              }} style={styles.ImageBackground_11_4920} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7ef14f6b-d80d-4608-b341-631e3f747d27"
              }} style={styles.ImageBackground_11_4921} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/77d9e812-4198-474b-a245-0b0dfc1b18b3"
              }} style={styles.ImageBackground_11_4923} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9c4ce517-aa82-419d-9507-9b9d8daf801b"
              }} style={styles.ImageBackground_11_4925} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/42c456cd-157c-4e59-bdd4-4982e33350a3"
              }} style={styles.ImageBackground_11_4927} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_11_4929}>
          <View style={styles.View_11_4930}>
            <View style={styles.View_11_4931}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/49c88ed1-2440-4c3d-9344-92365545b615"
            }} style={styles.ImageBackground_11_4932} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/26a8e1b6-ab16-44b0-999c-8990925c9cd0"
            }} style={styles.ImageBackground_11_4933} />
            </View>
            <View style={styles.View_11_4935}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/6a8f0553-80ef-4f6b-95f1-0297e6330c23"
            }} style={styles.ImageBackground_11_4936} />
            </View>
            <ImageBackground source={{
            uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f3274ba5-2194-426f-b00f-d208135e6c99"
          }} style={styles.ImageBackground_11_4940} />
          </View>
          <View style={styles.View_11_4942}>
            <View style={styles.View_11_4943}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/10bcdf4b-9b10-4c80-b233-aa4094fdc952"
            }} style={styles.ImageBackground_11_4944} />
              <View style={styles.View_11_4946}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a8fe42d5-7bd5-4615-a615-f80246719915"
              }} style={styles.ImageBackground_11_4947} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ecc28cef-34b7-4387-8f48-2264da41a2b6"
              }} style={styles.ImageBackground_11_4949} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d4470a7d-0f37-4009-a998-44223c715484"
              }} style={styles.ImageBackground_11_4950} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5583f33f-4f32-4faf-bec0-8b7c22d874f6"
              }} style={styles.ImageBackground_11_4952} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4c91fce3-f1f4-489c-a3d0-93f54a4eae23"
              }} style={styles.ImageBackground_11_4953} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e15719b5-18e7-4a5d-84f7-e4af863a62c6"
              }} style={styles.ImageBackground_11_4956} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b2217bdb-dbd1-44c6-aebc-c62221df4eff"
              }} style={styles.ImageBackground_11_4957} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/aac9f15c-ac20-462d-b770-277534da7dc0"
              }} style={styles.ImageBackground_11_4958} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf3941e3-138c-4a17-ba26-3051c086f01b"
              }} style={styles.ImageBackground_11_4960} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0c3431e8-0e0d-4b2c-8dd0-539b909b5c04"
              }} style={styles.ImageBackground_11_4962} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c58a52c4-4bf7-4e88-991f-f1b8d0edfc46"
              }} style={styles.ImageBackground_11_4964} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_11_4966}>
          <View style={styles.View_11_4967}>
            <View style={styles.View_11_4968}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b45baad6-83da-4038-ab5e-1f96d83306f6"
            }} style={styles.ImageBackground_11_4969} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/9901200c-c032-4389-85cb-438b88bdd1ec"
            }} style={styles.ImageBackground_11_4970} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/beec136f-b044-479d-9710-67e11b2ee1ad"
            }} style={styles.ImageBackground_11_4974} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/faabaaa7-3799-4a96-844c-db34e835015c"
            }} style={styles.ImageBackground_11_4977} />
            </View>
            <View style={styles.View_11_4979}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2bc39490-3ed9-4db6-b6d7-f46e17895141"
            }} style={styles.ImageBackground_11_4980} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5c9530e2-b33c-4b63-a007-b80727474394"
            }} style={styles.ImageBackground_11_4981} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f79c6072-3f74-4fea-86c3-03dc1f6ff339"
            }} style={styles.ImageBackground_11_4983} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a9706412-04f9-4a94-bc73-a54435d1a8b7"
            }} style={styles.ImageBackground_11_4984} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e396199f-98dd-47ee-aee8-3ecb4afcd0d3"
            }} style={styles.ImageBackground_11_4985} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4618c0ef-e276-4949-b98e-af5d3b743385"
            }} style={styles.ImageBackground_11_4986} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e039f59d-aedd-4c46-b2d9-b0925142dc38"
            }} style={styles.ImageBackground_11_4988} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4ae824c6-1ab3-4b93-a54b-dc5ad69e58ba"
            }} style={styles.ImageBackground_11_4989} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f601cbcd-6017-4d5f-98a0-dc0aa43c14a0"
            }} style={styles.ImageBackground_11_4991} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/afa4e621-d706-404f-ada2-81340b27c1e2"
            }} style={styles.ImageBackground_11_4993} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2e6a7172-8aab-431e-af0c-055401fe8761"
            }} style={styles.ImageBackground_11_4994} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65b8f3eb-226d-4b4e-aa4d-f41a4422c91a"
            }} style={styles.ImageBackground_11_4995} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0be6a1b4-2575-4219-ab37-f84aea6a3514"
            }} style={styles.ImageBackground_11_4996} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/e6480d8f-66a8-4455-a653-57e45f7cf980"
            }} style={styles.ImageBackground_11_4998} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/cc4ac832-ffde-4ff1-a8d1-01f6e694e3fa"
            }} style={styles.ImageBackground_11_4999} />
              <View style={styles.View_11_5000}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0138c742-714f-4ab7-bb64-52b3397761b1"
              }} style={styles.ImageBackground_11_5001} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/94771533-2d1f-4a24-9144-f5be1df9eeba"
              }} style={styles.ImageBackground_11_5009} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b1aea96b-8373-4f18-9ffb-5d2ba0ce9e5f"
              }} style={styles.ImageBackground_11_5010} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/8b3d3e3f-901c-46a1-9ade-16a23ce245f2"
              }} style={styles.ImageBackground_11_5013} />
              </View>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/ac1c1886-c10b-4851-9d57-dec8ebb323da"
            }} style={styles.ImageBackground_11_5015} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2c728762-5af8-4435-bd38-0423e652a750"
            }} style={styles.ImageBackground_11_5016} />
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/c34b40fa-57c1-4b90-b28b-494f245098ea"
            }} style={styles.ImageBackground_11_5017} />
              <View style={styles.View_11_5018}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/924d71f8-a258-4c4d-89d5-0ac994241440"
              }} style={styles.ImageBackground_11_5019} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b850fd97-6add-414a-bd34-5e588a71c196"
              }} style={styles.ImageBackground_11_5020} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/503fb7b6-4bbe-4e9b-9c54-52ffdc96d096"
              }} style={styles.ImageBackground_11_5022} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/602cc0cf-d0bf-478b-87f4-a1eae8dbe10d"
              }} style={styles.ImageBackground_11_5023} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/4d75b464-915e-4c57-ba3f-e927bb43ebaa"
              }} style={styles.ImageBackground_11_5024} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/dd634123-53b6-462d-9a63-623b992ac660"
              }} style={styles.ImageBackground_11_5025} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0b06410c-ab30-414b-868a-b60e8663ddee"
              }} style={styles.ImageBackground_11_5026} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/7113d959-0550-49ba-a7db-8f9c12131415"
              }} style={styles.ImageBackground_11_5028} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/312f6876-0000-4d11-b4c6-4066f4997562"
              }} style={styles.ImageBackground_11_5030} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/d7f5db68-d73d-4a52-bdce-b0fbfce8fd23"
              }} style={styles.ImageBackground_11_5032} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/1c86498f-f7d6-49a2-9805-2486403a099a"
              }} style={styles.ImageBackground_11_5034} />
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0da38c50-084e-43f3-bfb0-78ce50d899bc"
              }} style={styles.ImageBackground_11_5035} />
                <View style={styles.View_11_5036}>
                  <ImageBackground source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2593be1-cb1b-4533-8a9a-335b7f9655b2"
                }} style={styles.ImageBackground_11_5037} />
                  <ImageBackground source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/f2904250-3571-45cc-a2ed-da225f5897e1"
                }} style={styles.ImageBackground_11_5039} />
                  <ImageBackground source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/bf09265c-679c-4e97-b6b5-580b2cdfaea7"
                }} style={styles.ImageBackground_11_5041} />
                  <ImageBackground source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/65dba0b0-b218-4743-912e-1c500b6a25c5"
                }} style={styles.ImageBackground_11_5043} />
                  <ImageBackground source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5f85cc35-3829-47ab-9fd8-7051337a8f48"
                }} style={styles.ImageBackground_11_5044} />
                  <ImageBackground source={{
                  uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/fa70a369-38f0-4b9a-afa4-d24713da83de"
                }} style={styles.ImageBackground_11_5045} />
                </View>
              </View>
            </View>
          </View>
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/93d231b7-3deb-4abe-8769-49362e2ed192"
      }} style={styles.ImageBackground_11_5046} />
        <View style={styles.View_11_5048}>
          <View style={styles.View_11_5049}>
            <View style={styles.View_11_5050}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/2d72cc8f-1528-48d2-a241-4134156e4aa8"
            }} style={styles.ImageBackground_11_5051} />
            </View>
          </View>
          <View style={styles.View_11_5053}>
            <View style={styles.View_11_5054}>
              <View style={styles.View_11_5055}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/667f3b07-5dc0-4cca-b643-41bc71ec2bf5"
              }} style={styles.ImageBackground_11_5056} />
              </View>
            </View>
            <View style={styles.View_11_5058}>
              <View style={styles.View_11_5059}>
                <ImageBackground source={{
                uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/abf29c60-d29b-4fb3-bc73-b6a28b1797d7"
              }} style={styles.ImageBackground_11_5060} />
              </View>
            </View>
          </View>
        </View>
        <View style={styles.View_11_5062}>
          <View style={styles.View_11_5063}>
            <View style={styles.View_11_5064}>
              <ImageBackground source={{
              uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/be99c33d-e3be-445b-80a4-a2131e076646"
            }} style={styles.ImageBackground_11_5065} />
            </View>
          </View>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/b4095e61-ca3a-4d3b-ab8f-f5127433ea0c"
        }} style={styles.ImageBackground_11_5067} />
        </View>
        <View style={styles.View_11_5068}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/035be0b3-221b-4298-ab16-0dcfdd0fbe3e"
        }} style={styles.ImageBackground_11_5069} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/15ad0cfd-29e6-4db0-9fa7-070b72a0709c"
        }} style={styles.ImageBackground_11_5074} />
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/a41a6414-5a9b-4c43-8085-64c7e676f7a4"
        }} style={styles.ImageBackground_11_5075} />
        </View>
      </View>
      <View style={styles.View_45_12881}>
        <View style={styles.View_45_12882}>
          <ImageBackground source={{
          uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/0748bf34-2a91-4156-b727-58da4b1c41d0"
        }} style={styles.ImageBackground_45_12883} />
        </View>
        <ImageBackground source={{
        uri: "https://figma-alpha-api.s3.us-west-2.amazonaws.com/images/5197e3e3-ce06-423d-b4e9-4aa7cfaa293b"
      }} style={styles.ImageBackground_45_12889} />
      </View>
    </ScrollView>;
}
const styles = StyleSheet.create({
  ScrollView_1: {
    backgroundColor: "rgba(255, 255, 255, 1)"
  },
  View_2: {
    height: hp("140%")
  },
  View_8_4996: {
    width: wp("47%"),
    minWidth: wp("47%"),
    height: hp("140%"),
    minHeight: hp("140%"),
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
  View_8_5236: {
    width: wp("25%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("23%"),
    justifyContent: "flex-start"
  },
  Text_8_5236: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 26,
    fontWeight: "700",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5247: {
    width: wp("18%"),
    minWidth: wp("18%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("64%"),
    top: hp("26%")
  },
  View_8_5248: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_5248_8_4782: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_5248_8_4782: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I8_5248_8_4783: {
    flexGrow: 1,
    width: wp("8%"),
    height: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_8_5249: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_5249_8_4802: {
    flexGrow: 1,
    width: wp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I8_5249_8_4802: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5253: {
    width: wp("33%"),
    height: hp("81%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57%"),
    top: hp("40%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_5254: {
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
  View_8_5255: {
    width: wp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_8_5255: {
    color: "rgba(46, 42, 37, 1)",
    fontSize: 19,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5256: {
    width: wp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%"),
    top: hp("6%"),
    justifyContent: "flex-start"
  },
  Text_8_5256: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5257: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("15%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4498: {
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
  View_I11_4498_11_3270: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_4498_11_3270: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I11_4498_11_3271: {
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
  View_I11_4498_11_3272: {
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
  Text_I11_4498_11_3272: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4512: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("15%"),
    minHeight: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4513: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_4513: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4514: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("7%"),
    minHeight: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4515: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_11_4515: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4516: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I11_4516_10_3043: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_11_4517: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("11%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4518: {
    width: wp("24%"),
    minWidth: wp("24%"),
    height: hp("4%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4519: {
    width: wp("33%"),
    minWidth: wp("33%"),
    minHeight: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_11_4519: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4532: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("10%"),
    minHeight: hp("10%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("32%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_4532_11_4523: {
    flexGrow: 1,
    width: wp("33%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    justifyContent: "flex-start"
  },
  Text_I11_4532_11_4523: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I11_4532_11_4524: {
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
  View_I11_4532_11_4525: {
    width: wp("29%"),
    minWidth: wp("29%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I11_4532_11_4525: {
    color: "rgba(144, 144, 144, 1)",
    fontSize: 13,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_I11_4532_11_4526: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31%"),
    top: hp("2%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_I11_4532_11_4526_10_3043: {
    flexGrow: 1,
    width: wp("1%"),
    height: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("1%")
  },
  View_11_4539: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("8%"),
    minHeight: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("45%"),
    backgroundColor: "rgba(58, 176, 73, 1)"
  },
  View_I11_4539_7_553: {
    flexGrow: 1,
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%"),
    top: hp("2%"),
    justifyContent: "flex-start"
  },
  Text_I11_4539_7_553: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_8_5335: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("56%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_8_5336: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I8_5336_8_5308: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(58, 176, 73, 1)",
    borderWidth: 1
  },
  ImageBackground_I8_5336_8_5309: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_8_5337: {
    width: wp("22%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_8_5337: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4541: {
    width: wp("33%"),
    minWidth: wp("33%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_11_4542: {
    width: wp("2%"),
    minWidth: wp("2%"),
    height: hp("3%"),
    minHeight: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I11_4542_8_5311: {
    flexGrow: 1,
    width: wp("2%"),
    height: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    borderColor: "rgba(203, 203, 203, 1)",
    borderWidth: 1
  },
  View_11_4543: {
    width: wp("22%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%"),
    justifyContent: "center"
  },
  Text_11_4543: {
    color: "rgba(73, 68, 61, 1)",
    fontSize: 10,
    fontWeight: "400",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_11_4855: {
    width: wp("32%"),
    minWidth: wp("32%"),
    height: hp("66%"),
    minHeight: hp("66%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7%"),
    top: hp("51%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_11_4856: {
    width: wp("13%"),
    height: hp("25%"),
    top: hp("37%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20%")
  },
  ImageBackground_11_4857: {
    width: wp("12%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4859: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_4861: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("11%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4863: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_4865: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("18%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  View_11_4867: {
    width: wp("12%"),
    height: hp("24%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4868: {
    width: wp("12%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4869: {
    width: wp("12%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4871: {
    width: wp("7%"),
    height: hp("14%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_11_4873: {
    width: wp("11%"),
    height: hp("22%"),
    top: hp("41%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4874: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4876: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_4878: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4880: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_4882: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  View_11_4884: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4885: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4886: {
    width: wp("11%"),
    height: hp("21%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4888: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_4890: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_4891: {
    width: wp("14%"),
    height: hp("18%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_4892: {
    width: wp("14%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4893: {
    width: wp("13%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4894: {
    width: wp("14%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4896: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_11_4897: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4901: {
    width: wp("10%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_11_4903: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4904: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4905: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4907: {
    width: wp("17%"),
    height: hp("24%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4908: {
    width: wp("4%"),
    height: hp("13%"),
    top: hp("13%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4910: {
    width: wp("2%"),
    height: hp("9%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4912: {
    width: wp("9%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4913: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4915: {
    width: wp("5%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_11_4916: {
    width: wp("5%"),
    height: hp("14%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_11_4919: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6%")
  },
  ImageBackground_11_4920: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_11_4921: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_11_4923: {
    width: wp("3%"),
    height: hp("2%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_11_4925: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_11_4927: {
    width: wp("3%"),
    height: hp("1%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  View_11_4929: {
    width: wp("12%"),
    height: hp("18%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18%")
  },
  View_11_4930: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_4931: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4932: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4933: {
    width: wp("11%"),
    height: hp("15%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4935: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_11_4936: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4940: {
    width: wp("8%"),
    height: hp("0%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_11_4942: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4943: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4944: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4946: {
    width: wp("11%"),
    height: hp("18%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4947: {
    width: wp("3%"),
    height: hp("6%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_4949: {
    width: wp("6%"),
    height: hp("10%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_4950: {
    width: wp("1%"),
    height: hp("4%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_11_4952: {
    width: wp("4%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4953: {
    width: wp("3%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4956: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_4957: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_4958: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4960: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4962: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_4964: {
    width: wp("2%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4966: {
    width: wp("21%"),
    height: hp("46%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  View_11_4967: {
    width: wp("21%"),
    height: hp("46%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_4968: {
    width: wp("21%"),
    height: hp("14%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4969: {
    width: wp("12%"),
    height: hp("11%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_4970: {
    width: wp("19%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_4974: {
    width: wp("19%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4977: {
    width: wp("9%"),
    height: hp("9%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  View_11_4979: {
    width: wp("21%"),
    height: hp("36%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4980: {
    width: wp("3%"),
    height: hp("10%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11%")
  },
  ImageBackground_11_4981: {
    width: wp("9%"),
    height: hp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12%")
  },
  ImageBackground_11_4983: {
    width: wp("10%"),
    height: hp("12%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_11_4984: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_11_4985: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17%")
  },
  ImageBackground_11_4986: {
    width: wp("9%"),
    height: hp("15%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_4988: {
    width: wp("11%"),
    height: hp("24%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_4989: {
    width: wp("1%"),
    height: hp("18%"),
    top: hp("15%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_4991: {
    width: wp("0%"),
    height: hp("13%"),
    top: hp("17%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15%")
  },
  ImageBackground_11_4993: {
    width: wp("2%"),
    height: hp("12%"),
    top: hp("7%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_11_4994: {
    width: wp("2%"),
    height: hp("2%"),
    top: hp("9%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10%")
  },
  ImageBackground_11_4995: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("22%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_11_4996: {
    width: wp("4%"),
    height: hp("2%"),
    top: hp("32%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("9%")
  },
  ImageBackground_11_4998: {
    width: wp("10%"),
    height: hp("12%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_4999: {
    width: wp("6%"),
    height: hp("12%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5000: {
    width: wp("13%"),
    height: hp("15%"),
    top: hp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_5001: {
    width: wp("6%"),
    height: hp("0%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5009: {
    width: wp("13%"),
    height: hp("14%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5010: {
    width: wp("10%"),
    height: hp("1%"),
    top: hp("14%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5013: {
    width: wp("11%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5015: {
    width: wp("2%"),
    height: hp("6%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14%")
  },
  ImageBackground_11_5016: {
    width: wp("1%"),
    height: hp("5%"),
    top: hp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5%")
  },
  ImageBackground_11_5017: {
    width: wp("4%"),
    height: hp("7%"),
    top: hp("19%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5018: {
    width: wp("5%"),
    height: hp("11%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%")
  },
  ImageBackground_11_5019: {
    width: wp("3%"),
    height: hp("8%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5020: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5022: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5023: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5024: {
    width: wp("3%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5025: {
    width: wp("1%"),
    height: hp("2%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5026: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4%")
  },
  ImageBackground_11_5028: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5030: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5032: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5034: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5035: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_5036: {
    width: wp("4%"),
    height: hp("3%"),
    top: hp("5%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5037: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5039: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5041: {
    width: wp("1%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  ImageBackground_11_5043: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  ImageBackground_11_5044: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5045: {
    width: wp("0%"),
    height: hp("0%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5046: {
    width: wp("1%"),
    height: hp("3%"),
    top: hp("23%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  View_11_5048: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19%")
  },
  View_11_5049: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5050: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5051: {
    width: wp("5%"),
    height: hp("10%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5053: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("1%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_5054: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_5055: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5056: {
    width: wp("2%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5058: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5059: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5060: {
    width: wp("0%"),
    height: hp("3%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5062: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("28%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2%")
  },
  View_11_5063: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_11_5064: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5065: {
    width: wp("5%"),
    height: hp("9%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5067: {
    width: wp("2%"),
    height: hp("4%"),
    top: hp("2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1%")
  },
  View_11_5068: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26%")
  },
  ImageBackground_11_5069: {
    width: wp("4%"),
    height: hp("6%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_11_5074: {
    width: wp("1%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  ImageBackground_11_5075: {
    width: wp("0%"),
    height: hp("1%"),
    top: hp("3%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3%")
  },
  View_45_12881: {
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
  View_45_12882: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12883: {
    width: wp("11%"),
    height: hp("5%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_45_12889: {
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