import React from "react";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { stepI } from "../interfaces";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardImg from "react-bootstrap/esm/CardImg";
import Link from "next/link";
import ReactPlayer from "react-player";

type Props = {
  step: stepI;
  renditionType: string;
};

function Step({ step, renditionType }: Props) {
  return (
    <>
      {" "}
      <Container>
        <Row>
          <Col md={12}>
            <Jumbotron fluid className={styles.centeredText}>
              <Container>
                <Container>
                  <Row>
                    <Col md={6}>
                      <Card className={styles.fullHeight}>
                        <Card.Img
                          variant="top"
                          src={step?.MainAsset?.Renditions[0]?.url ?? ""}
                          alt={step?.MainAsset?.title}
                        />
                      </Card>
                    </Col>
                    <Col md={6}>
                      {step?.Title != "" ? (
                        <>
                          <div>
                            <b>Work Breakdown Step:</b> {step?.Title}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.StepNumber != "" ? (
                        <>
                          <div>
                            <b>Step Number:</b> {step?.StepNumber}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.GeneralSubjectInfo != "" ? (
                        <>
                          <div>
                            <b>General Subject Info:</b>{" "}
                            {step?.GeneralSubjectInfo}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.SupportiveWBSStepInfo != "" ? (
                        <>
                          <div>
                            <b>Supportive WBS Step Info:</b>{" "}
                            <div
                              className={styles.dontbreakout}
                              dangerouslySetInnerHTML={{
                                __html: step?.SupportiveWBSStepInfo,
                              }}
                            />
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.NecessaryTaskInfoData != "" ? (
                        <>
                          <div>
                            <b>Necessary Task Info Data:</b>{" "}
                            {step?.NecessaryTaskInfoData}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.ReceivableDeviationInformation != "" ? (
                        <>
                          <div>
                            <b>Receivable Deviation Information:</b>{" "}
                            {step?.ReceivableDeviationInformation}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.CautionSafetyandCompliance != "" ? (
                        <>
                          <div>
                            <b>Caution Safety and Compliance:</b>{" "}
                            {step?.CautionSafetyandCompliance}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.CriticalQualityIssue != "" ? (
                        <>
                          <div>
                            <b>Critical Quality Issue:</b>{" "}
                            {step?.CriticalQualityIssue}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.CriticalProcessTaskCheck != "" ? (
                        <>
                          <div>
                            <b>Critical Process Task Check:</b>{" "}
                            {step?.CriticalProcessTaskCheck}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.RecurrentProficiencyChecks != "" ? (
                        <>
                          <div>
                            <b>Recurrent Proficiency Checks:</b>{" "}
                            {step?.RecurrentProficiencyChecks}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.PerformanceMetrixData != "" ? (
                        <>
                          <div>
                            <b>Performance Metrix Data:</b>{" "}
                            {step?.PerformanceMetrixData}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.MisconductData != "" ? (
                        <>
                          <div>
                            <b>Misconduct Data:</b> {step?.MisconductData}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}
                      {step?.AuditFocus != "" ? (
                        <>
                          <div>
                            <b>Audit Focus:</b> {step?.AuditFocus}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}
                      {step?.ManagementDecision != "" ? (
                        <>
                          <div>
                            <b>Management Decision:</b>{" "}
                            {step?.ManagementDecision}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.Escalation != "" ? (
                        <>
                          <div>
                            <b>Escalation:</b> {step?.Escalation}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.TaskCompletion != "" ? (
                        <>
                          <div>
                            <b>Task Completion:</b> {step?.TaskCompletion}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.CompletionData != "" ? (
                        <>
                          <div>
                            <b>Completion Data:</b> {step?.CompletionData}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}

                      {step?.DeliveryInfoData != "" ? (
                        <>
                          <div>
                            <b>Delivery Info Data:</b> {step?.DeliveryInfoData}
                          </div>
                          <hr />
                        </>
                      ) : (
                        <></>
                      )}
                      <div>
                        {step?.RequirementClassA != "" ? (
                          <>
                            <div>
                              <b>Requirement Class A:</b>{" "}
                              {step?.RequirementClassA}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassB != "" ? (
                          <>
                            <div>
                              <b>Requirement Class B:</b>{" "}
                              {step?.RequirementClassB}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassC != "" ? (
                          <>
                            <div>
                              <b>Requirement Class C:</b>{" "}
                              {step?.RequirementClassC}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassD != "" ? (
                          <>
                            <div>
                              <b>Requirement Class D:</b>{" "}
                              {step?.RequirementClassD}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassE != "" ? (
                          <>
                            <div>
                              <b>Requirement Class E:</b>{" "}
                              {step?.RequirementClassE}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassF != "" ? (
                          <>
                            <div>
                              <b>Requirement Class F:</b>{" "}
                              {step?.RequirementClassF}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassG != "" ? (
                          <>
                            <div>
                              <b>Requirement Class G:</b>{" "}
                              {step?.RequirementClassG}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassH != "" ? (
                          <>
                            <div>
                              <b>Requirement Class H:</b>{" "}
                              {step?.RequirementClassH}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassI != "" ? (
                          <>
                            <div>
                              <b>Requirement Class I:</b>{" "}
                              {step?.RequirementClassI}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassJ != "" ? (
                          <>
                            <div>
                              <b>Requirement Class J:</b>{" "}
                              {step?.RequirementClassJ}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassK != "" ? (
                          <>
                            <div>
                              <b>Requirement Class K:</b>{" "}
                              {step?.RequirementClassK}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassL != "" ? (
                          <>
                            <div>
                              <b>Requirement Class L:</b>{" "}
                              {step?.RequirementClassL}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.RequirementClassM != "" ? (
                          <>
                            <div>
                              <b>Requirement Class M:</b>{" "}
                              {step?.RequirementClassM}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                      </div>
                      <hr />
                      {step?.Previous != "" ?? false ? (
                        <div>
                          <Link
                            href={{
                              pathname: "/Steps/Detail/" + step?.Previous,
                            }}
                          >
                            <a className={styles.CardLinkDetail}>
                              <p>Previous Step</p>
                            </a>
                          </Link>
                        </div>
                      ) : null}

                      {step?.Next != "" ?? false ? (
                        <div>
                          <Link
                            href={{ pathname: "/Steps/Detail/" + step?.Next }}
                          >
                            <a className={styles.CardLinkDetail}>
                              <p>Next Step</p>
                            </a>
                          </Link>
                        </div>
                      ) : null}
                    </Col>
                  </Row>
                </Container>
              </Container>
              <Container>
                <Row>
                  <Col md={3}>
                    <Link
                      href={{ pathname: "/Events/Detail/" + step?.Process }}
                    >
                      <a className={styles.CardLinkDetail}>
                        <p>Back to Process</p>
                      </a>
                    </Link>
                  </Col>
                </Row>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <Container>
        {step?.Assets?.length > 0 ? (
          <Row>
            <Col md={12}>
              <h2>More Assets</h2>
            </Col>
          </Row>
        ) : null}
        <Row>
          {step?.Assets?.length > 0
            ? step.Assets.map((asset) =>
                asset.Type == "jpg" ? (
                  <Col md={3}>
                    <Card className={styles.fullHeight}>
                      <Card.Img
                        variant="top"
                        src={asset?.Renditions[0]?.url ?? ""}
                        alt={asset?.title}
                      />
                    </Card>
                  </Col>
                ) : null
              )
            : null}
        </Row>
        <hr />
        <Row>
          <Col md={12}>
            {step?.Assets?.length > 0
              ? step.Assets.map((asset) =>
                  asset.Type == "mp4" ? (
                      <ReactPlayer
                        controls={true}
                        url={asset?.Renditions[0]?.url ?? ""}
                        width='100%'
                        height='100%'
                      />
                  ) : null
                )
              : null}
          </Col>
        </Row>
      </Container>
    </>
  );
}
export default Step;
