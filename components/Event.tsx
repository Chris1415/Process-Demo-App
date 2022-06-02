import React from "react";
import styles from "../styles/Home.module.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import Alert from "react-bootstrap/Alert";
import { eventI } from "../interfaces";
import Jumbotron from "react-bootstrap/Jumbotron";
import CardImg from "react-bootstrap/esm/CardImg";
import Link from "next/link";
import Image from "next/image";

type Props = {
  event: eventI;
  renditionType: string;
};

function Event({ event, renditionType }: Props) {
  return (
    <main className={styles.main}>
      <Container>
        <Row>
          <Col md={12}>
            <Jumbotron fluid className={styles.centeredText}>
              <Container>
                <h1>{event?.Name}</h1>
                <hr />
                <Container>
                  <Row>
                    <Col md={6}>
                      <Card className={styles.fullHeight}>
                        <Card.Img
                          variant="top"
                          src={event?.MainAsset?.Renditions[0]?.url ?? ""}
                          alt={event?.MainAsset?.title}
                        />
                      </Card>
                    </Col>
                    <Col md={6}>
                      <div>
                        <b>Description:</b> {event?.Description}
                      </div>
                      <hr />
                      <div>
                        <b>Work Description:</b> {event?.ProcessDescription}
                      </div>
                      <hr />
                      <div>
                        <b>Process and Sub Process:</b> {event?.SubProcess}
                      </div>
                      <hr />
                      <div>
                        <b>Task:</b> {event?.Task}
                      </div>
                      <hr />
                      <div>
                        <b>Work Cluster:</b> {event?.WorkCluster}
                      </div>
                      <hr />
                      <div>
                        <b>Work Package:</b> {event?.WorkPackage}
                      </div>
                      <hr />
                      <div>
                        <b>Portfolio and Service:</b>{" "}
                        {event?.ProductFamilies?.join(" | ")}
                      </div>
                    </Col>
                  </Row>
                </Container>
              </Container>
            </Jumbotron>
          </Col>
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col md={12}>
            <h2>Steps</h2>
          </Col>
        </Row>
        <Row>
          {event?.Steps?.length > 0
            ? event.Steps.map((step, index) => (
                <Col key={step.Id} md={3}>
                  <Card className={styles.fullHeight} key={index}>
                    <Card.Img
                      variant="top"
                      src={step?.MainAsset?.Renditions[0]?.url}
                      alt={step?.MainAsset?.title}
                    />
                    <Card.Body className={styles.space}>
                      <Card.Title>{step?.Title}</Card.Title>
                      <Card.Text className={styles.spaceXL}>
                        <div />
                      </Card.Text>
                      <Link href={{ pathname: "/Steps/Detail/" + step?.Id }}>
                        <a className={styles.CardLink}>
                          <p>Details</p>
                        </a>
                      </Link>
                    </Card.Body>
                  </Card>
                </Col>
              ))
            : null}
        </Row>
      </Container>
      <hr />
      <Container>
        <Row>
          <Col md={12}>
            <h2>Steps Overview</h2>
          </Col>
        </Row>
        <div>
          {event?.Steps?.length > 0
            ? event.Steps.map((step, index) => (
                <Row className={styles.pseudoTable}>
                  <Col key={step.Id} md={12}>
                    <Row>
                      <Col md={3}>
                        {step?.MainAsset?.Renditions[0]?.url ? (
                          <Image
                            src={step?.MainAsset?.Renditions[0]?.url}
                            width={200}
                            height={150}
                          />
                        ) : (
                          <></>
                        )}
                      </Col>
                      <Col md={9}>
                        {step?.Title != "" ? (
                          <>
                            <div>
                              <b>Work Breakdown Step:</b> {step?.Title}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}

                        {step?.StepNumber != "" ? (
                          <>
                            <div>
                              <b>Step Number:</b> {step?.StepNumber}
                            </div>
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
                          </>
                        ) : (
                          <></>
                        )}

                        {step?.SupportiveWBSStepInfo != "" ? (
                          <>
                            <div>
                              <b>Supportive WBS Step Info:</b>{" "}
                              <div className={styles.dontbreakout}
                                dangerouslySetInnerHTML={{
                                  __html: step?.SupportiveWBSStepInfo,
                                }}
                              />
                            </div>
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
                          </>
                        ) : (
                          <></>
                        )}

                        {step?.MisconductData != "" ? (
                          <>
                            <div>
                              <b>Misconduct Data:</b> {step?.MisconductData}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}
                        {step?.AuditFocus != "" ? (
                          <>
                            <div>
                              <b>Audit Focus:</b> {step?.AuditFocus}
                            </div>
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
                          </>
                        ) : (
                          <></>
                        )}

                        {step?.Escalation != "" ? (
                          <>
                            <div>
                              <b>Escalation:</b> {step?.Escalation}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}

                        {step?.TaskCompletion != "" ? (
                          <>
                            <div>
                              <b>Task Completion:</b> {step?.TaskCompletion}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}

                        {step?.CompletionData != "" ? (
                          <>
                            <div>
                              <b>Completion Data:</b> {step?.CompletionData}
                            </div>
                          </>
                        ) : (
                          <></>
                        )}

                        {step?.DeliveryInfoData != "" ? (
                          <>
                            <div>
                              <b>Delivery Info Data:</b>{" "}
                              {step?.DeliveryInfoData}
                            </div>
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
                      </Col>
                    </Row>
                  </Col>
                </Row>
              ))
            : null}
        </div>
      </Container>
      <hr />
      <Container>
        {event?.Assets?.length > 0 ? (
          <Row>
            <Col md={12}>
              <h2>More Assets</h2>
            </Col>
          </Row>
        ) : null}
        <Row>
          {event?.Assets?.length > 0
            ? event.Assets.map((asset) => (
                <>
                  <Col md={3}>
                    <Card className={styles.fullHeight}>
                      <Card.Img
                        variant="top"
                        src={asset?.Renditions[0]?.url ?? ""}
                        alt={asset?.title}
                      />
                    </Card>
                  </Col>
                </>
              ))
            : null}
        </Row>
      </Container>
    </main>
  );
}

export default Event;
