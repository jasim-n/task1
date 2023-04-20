import { Button, Col, Image, Input, Row } from "antd";
import React, { useEffect, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { useRouter } from "next/router";

const imageUpdate = gql`
  mutation MyMutation($id: Int!, $Imgurl: String!) {
    update_check_in_by_pk(
      pk_columns: { id: $id }
      _set: { image_url: $Imgurl }
    ) {
      id
      name
      image_url
    }
  }
`;
const commentupdate = gql`
  mutation MyMutation($id: Int!, $comment: String!) {
    update_check_in_by_pk(
      pk_columns: { id: $id }
      _set: { comment: $comment }
    ) {
      id
      name
      image_url
    }
  }
`;
const nameupdater = gql`
  mutation MyMutation($id: Int!, $name: String!) {
    update_check_in_by_pk(pk_columns: { id: $id }, _set: { name: $name }) {
      id
      name
      image_url
    }
  }
`;
const Allcheckin = () => {
  const [edit1, setEdit1] = useState(false);
  const [edit2, setEdit2] = useState(false);
  const [edit3, setEdit3] = useState(false);
  const [Imgurl, setImgUrl] = useState("text");
  const [update_check_in_by_pk, { data: data2 }] = useMutation(imageUpdate);
  const [messageupdater, { data: data3 }] = useMutation(commentupdate);
  const [nameupdate, { data: data4 }] = useMutation(nameupdater);
  const [headingerror, setheadingerror] = useState(false);
  const [commenterror, setcommenterror] = useState(false);

  const [commentValue, setCommentValue] = useState("text");
  const [headingValue, setHeadingValue] = useState("text");
  const router = useRouter();
  const { id } = router.query;
  const GET_LOCATIONS = gql`
  query MyQuery {
    check_in_by_pk(id:${id}){
         id
         comment
         created_at
         image_url
         name
         updated_at
    }
     }
  `;
const headingcheck=()=>{ if (headingValue.length >= 3) {
  setEdit1(false);
  setheadingerror(false);
  nameupdate({ variables: { id: id, name: headingValue } });
} else {
  setheadingerror(true);
}


}
const commentcheck=()=>{ if (commentValue.length >= 3) {
  setEdit2(false);
  setcommenterror(false);
  messageupdater({
    variables: { id: id, comment: commentValue },
  });} else {
  setcommenterror(true);
}


}
  const { isSuccess, loading, error, data } = useQuery(GET_LOCATIONS);

  useEffect(() => {
    if (data?.check_in_by_pk) {
      let a = data?.check_in_by_pk;
      console.log(a);
      setCommentValue(a.comment);

      if (a.image_url == "") {
        setImgUrl("no url");
      } else {
        setImgUrl(a.image_url);
      }
      setHeadingValue(a.name);
    }
  }, [loading]);
  return (
    <div>
      <Row style={{ padding: "2rem" }}>
        <Col span={14}>
          {edit3 && (
            <div
              style={{
                position: "absolute",
                zIndex: "2",
                top: "10px",
                right: "5px",
              }}
            >
              {" "}
              <Input
                value={Imgurl}
                onChange={(e) => setImgUrl(e.target.value)}
              />
              <Button
                onClick={() => {
                  setEdit3(false);

                  update_check_in_by_pk({
                    variables: { id: id, Imgurl: Imgurl },
                  });
                }}
                type="primary"
                style={{ marginTop: "10px" }}
              >
                save
              </Button>{" "}
            </div>
          )}

          {!edit3 && (
            <div
              className="prpic"
              style={{ display: "flex", alignItems: "flex-end" }}
            >
              <p className="pictxt"> {Imgurl}</p>
              <button
                className="editbtn picedit"
                style={{ border: "none", marginLeft: "5px" }}
                onClick={() => setEdit3(true)}
              >
                <Image
                  className="editbtnpic"
                  src="/btnimg.png"
                  preview={false}
                  width={"12"}
                ></Image>
              </button>
            </div>
          )}
          <Image
            width={"100%"}
            style={{ maxHeight: "580px", borderRadius: "10px" }}
            preview={false}
            src={Imgurl}
            fallback="data:image/png;base64,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"
          />
        </Col>
        <Col span={9} offset={1}>
          <div>
            {edit1 && (
              <>
                {" "}
                <Input
                  value={headingValue}
                  onChange={(e) => setHeadingValue(e.target.value)}
                />
                <Button
                  type="primary"
                  onClick={() => {
                  headingcheck()}}
                  style={{ marginTop: "10px" }}
                >
                  save
                </Button>{" "}
                {headingerror && (
                  <p style={{ color: "red" }}>
                    Minimum 3 characters should be added
                  </p>
                )}
              </>
            )}
            {!edit1 && (
              <p
                style={{
                  display: "flex",
                  alignItems: "center",
                  fontFamily: "Roboto",
                  fontSize: "30px",
                  lineHeight: "40px",
                  fontWeight: "500",
                }}
              >
                {headingValue ? headingValue : "Checkin Title Goes Here"}
                <button
                  className="editbtn"
                  style={{ border: "none", marginLeft: "5px" }}
                  onClick={() => setEdit1(true)}
                >
                  <Image
                    className="editbtnpic"
                    src="/btnimg.png"
                    preview={false}
                    width={"12"}
                  ></Image>
                </button>
              </p>
            )}
          </div>
          <div>
            {edit2 && (
              <>
                {" "}
                <Input
                  value={commentValue}
                  onChange={(e) => setCommentValue(e.target.value)}
                />
                <Button
                  type="primary"
                  onClick={() => {
commentcheck()
                  
                  }}
                  style={{ marginTop: "10px" }}
                >
                  save
                </Button>{" "}
                {commenterror && (
                  <p style={{ color: "red" }}>
                    Minimum 3 characters should be added
                  </p>
                )}
              </>
            )}
            {edit2 == false && (
              <p
                style={{
                  fontFamily: "Roboto",
                  fontSize: "14px",
                  lineHeight: "20px",
                  fontWeight: "400",
                }}
              >
                {commentValue}
                <button
                  className="editbtn"
                  onClick={() => setEdit2(true)}
                  style={{ border: "none", marginLeft: "5px" }}
                >
                  <Image
                    className="editbtnpic"
                    src="/btnimg.png"
                    preview={false}
                    width={"12"}
                  ></Image>
                </button>
              </p>
            )}
          </div>

          <div>
            <p
              style={{
                fontFamily: "Roboto",
                fontSize: "12px",
                fontWeight: "400",
                lineHeight: "20px",
                color: "#8C8C8C",
                marginTop: "7px",
              }}
            >
              Nov 10, 2022
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Allcheckin;
