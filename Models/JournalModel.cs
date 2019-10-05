using System;

namespace Capstone_0.Models
{
  public class JournalModel
  {
    //   Still need to add individual questions for Journal. See HPP. 
    public String ExcitedAboutToday { get; set; }
    public String OneWordToDescribeMeToday { get; set; }
    public String WhoNeedsMeOnMyAGame { get; set; }
    public String WhatMightStressMeOut { get; set; }
    public String TheWayMyBestSelfWouldDealIs { get; set; }
    public String SomeoneToSurpriseWithAppreciation { get; set; }
    public String OneActionToDeminstrateExecellence { get; set; }
    public String OneBoldActionToTakeToday { get; set; }
    public String LookingAtMyLifeMetaIWouldTellMyself { get; set; }
    public String ProjectsToKeepInMindForFutureAre { get; set; }
    public String IWouldKnowTodayIsASuccessIf { get; set; }
    // public string JournalEntry { get; set; }
    // Pillars of the day Below. Think about potential refactor of meta organization
    public String TodaysMessageToMyself { get; set; }
    public String TodaysTopPriorities { get; set; }
    public String TasksThatMustBeDoneToday { get; set; }
    public String PersonsToConnectWithToday { get; set; }
    public int ID { get; set; }
    public int UserID { get; set; }
    public DateTime AccountCreated { get; set; } = DateTime.Now;
  }
}