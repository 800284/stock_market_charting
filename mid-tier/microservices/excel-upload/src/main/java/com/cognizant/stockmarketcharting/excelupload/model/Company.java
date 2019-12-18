package com.cognizant.stockmarketcharting.excelupload.model;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.validation.constraints.NotNull;



@Entity
@Table(name="company")
public class Company {
	
	@Id
	@NotNull
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name="cp_id")
	private int id;
	
	@NotNull
	@Column(name="cp_code")
	private Long companyCode;
	
	@NotNull
	@Column(name="cp_name")
	private String name;
	
	@NotNull
	@Column(name="cp_turnover")
	private Long turnover;
	
	@NotNull
	@Column(name="cp_ceo")
	private String ceo;
	
	@NotNull
	@Column(name="cp_board_of_directors")
	private String boardOfDirectors;
	
	@NotNull
	@Column(name="cp_listed")
	private boolean listed;
	
	@NotNull
	@ManyToOne
	@JoinColumn(name="cp_se_id")
	private Sector sector;
	
	@NotNull
	@Column(name="cp_brief")
	private String aboutCompany;
	public Company() {super();}

	public Company(int id, Long companyCode, String name, Long turnover, String ceo, String boardOfDirectors,
			boolean listed, Sector sector, String aboutCompany) {
		super();
		this.id = id;
		this.companyCode = companyCode;
		this.name = name;
		this.turnover = turnover;
		this.ceo = ceo;
		this.boardOfDirectors = boardOfDirectors;
		this.listed = listed;
		this.sector = sector;
		this.aboutCompany = aboutCompany;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public Long getCompanyCode() {
		return companyCode;
	}

	public void setCompanyCode(Long companyCode) {
		this.companyCode = companyCode;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}
 
	public Long getTurnover() {
		return turnover;
	}

	public void setTurnover(Long turnover) {
		this.turnover = turnover;
	}

	public String getCeo() {
		return ceo;
	}

	public void setCeo(String ceo) {
		this.ceo = ceo;
	}

	public String getBoardOfDirectors() {
		return boardOfDirectors;
	}

	public void setBoardOfDirectors(String boardOfDirectors) {
		this.boardOfDirectors = boardOfDirectors;
	}

	public boolean isListed() {
		return listed;
	}

	public void setListed(boolean listed) {
		this.listed = listed;
	}

	public Sector getSector() {
		return sector;
	}

	public void setSector(Sector sector) {
		this.sector = sector;
	}

	public String getAboutCompany() {
		return aboutCompany;
	}

	public void setAboutCompany(String aboutCompany) {
		this.aboutCompany = aboutCompany;
	}

	@Override
	public String toString() {
		return "Company [id=" + id + ", companyCode=" + companyCode + ", name=" + name + ", turnover=" + turnover
				+ ", ceo=" + ceo + ", boardOfDirectors=" + boardOfDirectors + ", listed=" + "sector  = "+sector+ listed + ", aboutCompany="
				+ aboutCompany + "]";
	} 
	
	
	
	
}
