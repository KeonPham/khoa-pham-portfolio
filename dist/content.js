window.PORTFOLIO_PROJECTS = [
  {
    "id": "medseg-api",
    "title": "MedSegAPI: from segmentation research to an API",
    "category": "vision",
    "context": "Independent research and software project, derived from a master’s thesis.",
    "summary": "A lung-segmentation service that connects model research with an API, a visual result viewer, and an operating workflow.",
    "stack": [
      "Python",
      "PyTorch",
      "FastAPI",
      "Docker",
      "GitHub Actions",
      "Streamlit"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "A trained segmentation model needs an accessible interface, repeatable inference, and a way to inspect its outputs."
      },
      {
        "title": "The work",
        "body": "Serve CNN, Vision Transformer and hybrid segmentation models through FastAPI.\n\nPackage inference in Docker and expose single-image and batch endpoints.\n\nAdd a visual viewer, API-key access, prediction logging, monitoring and CI/CD."
      },
      {
        "title": "What the artifacts show",
        "body": "Repository includes a working implementation and saved examples showing the original X-ray, predicted mask and overlay.\n\nThe public code documents the path from model experimentation to a service interface."
      },
      {
        "title": "What I learned",
        "body": "Connect research quality with deployment, observability and usability."
      },
      {
        "title": "Project scope",
        "body": "Research and educational project; no clinical validation claim.\n\nLive availability and benchmark results were not independently rerun."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/medseg-output.png",
        "alt": "Actual saved MedSegAPI output: source X-ray, predicted lung mask and overlay.",
        "caption": "Actual saved MedSegAPI output: source X-ray, predicted lung mask and overlay."
      },
      {
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/page-24.webp",
        "alt": "Lung Segmentation Research — Research workflow",
        "caption": "Research workflow"
      },
      {
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/page-26.webp",
        "alt": "Lung Segmentation Research — Chest X-rays and ground-truth lung masks",
        "caption": "Chest X-rays and ground-truth lung masks"
      },
      {
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/page-31.webp",
        "alt": "Lung Segmentation Research — Parallel CNN–Transformer architecture",
        "caption": "Parallel CNN–Transformer architecture"
      },
      {
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/page-38.webp",
        "alt": "Lung Segmentation Research — In-domain baseline evaluation",
        "caption": "In-domain baseline evaluation"
      },
      {
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/page-41.webp",
        "alt": "Lung Segmentation Research — Cross-dataset evaluation and domain shift",
        "caption": "Cross-dataset evaluation and domain shift"
      },
      {
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/page-53.webp",
        "alt": "Lung Segmentation Research — Predicted masks on held-out images",
        "caption": "Predicted masks on held-out images"
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/medseg-api.html",
        "type": "html"
      },
      {
        "title": "Full project document · 57 pages",
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/lung-segmentation-presentation.pdf",
        "type": "pdf"
      },
      {
        "title": "Full research report · 83 pages",
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/lung-segmentation-thesis.pdf",
        "type": "pdf"
      },
      {
        "title": "Ethics canvas · 5 pages",
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/lung-segmentation-ethics.pdf",
        "type": "pdf"
      },
      {
        "title": "Original lung segmentation research demonstration",
        "src": "assets/projects/drive/public/projects/lung-segmentation-presentation/lung-segmentation-demo.m4v",
        "type": "video"
      }
    ],
    "sources": [
      {
        "label": "MedSegAPI repository",
        "url": "https://github.com/KeonPham/medseg-api"
      },
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1kTmKw9-a71REDOPjpP2VrEmz19OK5_Ia/view"
      },
      {
        "label": "Research report",
        "url": "https://drive.google.com/file/d/1lh7CR-4cq8zNRzPO9Bh37-C_PmVKpDuU/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/medseg-api.webp",
    "thumbnailAlt": "Actual saved MedSegAPI output: source X-ray, predicted lung mask and overlay."
  },
  {
    "id": "iot-data-platform",
    "title": "Smart Farm IoT Data Platform",
    "category": "engineering",
    "context": "AIT coursework · Relational database and SQL prototype",
    "summary": "A smart-farm platform concept developed through product requirements, relational modeling, SQL queries and a Grafana visualization prototype.",
    "stack": [
      "MySQL",
      "SQL",
      "Relational modeling",
      "IoT",
      "Grafana",
      "Time-series analysis"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Farm sensor readings need a structure that connects customers, farms, zones, devices and alert rules. The project turns that domain into a queryable data model."
      },
      {
        "title": "The work",
        "body": "Outlined the product concept, business model and high-level architecture before defining the data model.\n\nDesigned entities, relationships, primary and foreign keys, constraints and a sensor-to-rule many-to-many relationship.\n\nImplemented insert/update examples and ten business-query patterns, including rolling averages, alert counts, percentiles, energy by shift and Pareto analysis."
      },
      {
        "title": "What the artifacts show",
        "body": "Delivered a 35-slide coursework deck with architecture, ERD, schemas, SQL and Grafana examples.\n\nThe artifact connects product thinking with database implementation; commercial deployment and real-time production operation are not established."
      },
      {
        "title": "What I learned",
        "body": "Useful data models begin with the questions people need to answer and the rules that keep those answers trustworthy.\n\nThe project links technical detail to operational use cases without treating a prototype as a deployed platform."
      }
    ],
    "media": [
      {
        "src": "assets/projects/drive/public/projects/iot-data-platform/page-01.webp",
        "alt": "Smart Farm IoT Data Platform — Smart-farm IoT data platform",
        "caption": "Smart-farm IoT data platform"
      },
      {
        "src": "assets/projects/drive/public/projects/iot-data-platform/page-06.webp",
        "alt": "Smart Farm IoT Data Platform — High-level data architecture",
        "caption": "High-level data architecture"
      },
      {
        "src": "assets/projects/drive/public/projects/iot-data-platform/page-07.webp",
        "alt": "Smart Farm IoT Data Platform — Conceptual entity-relationship diagram",
        "caption": "Conceptual entity-relationship diagram"
      },
      {
        "src": "assets/projects/drive/public/projects/iot-data-platform/page-08.webp",
        "alt": "Smart Farm IoT Data Platform — Relational entity schema",
        "caption": "Relational entity schema"
      },
      {
        "src": "assets/projects/drive/public/projects/iot-data-platform/page-24.webp",
        "alt": "Smart Farm IoT Data Platform — Grafana visualization prototype",
        "caption": "Grafana visualization prototype"
      },
      {
        "src": "assets/projects/drive/public/projects/iot-data-platform/page-35.webp",
        "alt": "Smart Farm IoT Data Platform — SQL-driven Pareto alert analysis",
        "caption": "SQL-driven Pareto alert analysis"
      }
    ],
    "documents": [
      {
        "title": "Full project document · 35 pages",
        "src": "assets/projects/drive/public/projects/iot-data-platform/iot-data-platform.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1zTx1qKnKy4AMw_bW2YMAnmG7_8yxOHm8/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/iot-data-platform.webp",
    "thumbnailAlt": "Smart Farm IoT Data Platform — Smart-farm IoT data platform"
  },
  {
    "id": "hr-interview-agent",
    "title": "AI Interviewer",
    "category": "agents",
    "context": "Trio-CDK team hackathon prototype · GreenNode Claw-a-thon",
    "summary": "A bilingual interview-agent prototype that brings conversation, technical exercises and structured reporting into one candidate journey.",
    "stack": [
      "LangGraph",
      "Whisper",
      "edge-tts",
      "GreenNode AgentBase",
      "Gemma",
      "Qwen"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "First-round technical screening can consume experienced engineers' time and delay candidates while interviews are scheduled. The team explored how an agent could make this step more consistent and accessible."
      },
      {
        "title": "The work",
        "body": "Designed a voice-or-text interview flow in English and Vietnamese, from introductions to project discussion and technical follow-ups.\n\nCombined adaptive questioning with chart exercises involving boxplots, model metrics and confusion matrices.\n\nPresented a report organized around communication, technical depth, problem-solving, culture fit and language, with answer evidence."
      },
      {
        "title": "What the artifacts show",
        "body": "Produced a team hackathon prototype, product poster and demonstration.\n\nThe artifact demonstrates the intended experience; hiring outcomes and fairness have not been independently validated."
      },
      {
        "title": "What I learned",
        "body": "The product challenge extends beyond generating questions: the conversation, technical assessment and evidence trail must work together.\n\nThe available source identifies the team as Trio-CDK but does not separate individual contributions."
      }
    ],
    "media": [
      {
        "src": "assets/projects/drive/public/projects/hr-interview-agent/product-poster.webp",
        "alt": "AI Interviewer — Autonomous AI Interviewer — the team’s original hackathon product poster",
        "caption": "Autonomous AI Interviewer — the team’s original hackathon product poster"
      },
      {
        "src": "assets/projects/drive/public/projects/hr-interview-agent/page-01.webp",
        "alt": "AI Interviewer — Hackathon project overview and product demonstration",
        "caption": "Hackathon project overview and product demonstration"
      }
    ],
    "documents": [
      {
        "title": "Full project document · 1 pages",
        "src": "assets/projects/drive/public/projects/hr-interview-agent/hr-interview-agent.pdf",
        "type": "pdf"
      },
      {
        "title": "Original hackathon demonstration — hosted on Drive",
        "src": "https://drive.google.com/file/d/1S_yOyzfdd_b4NelbBsAsmYXwTJTFlSLA/preview",
        "type": "drive-video"
      }
    ],
    "sources": [
      {
        "label": "Original Drive artifact",
        "url": "https://docs.google.com/presentation/d/1gbTeaq9EM4wWtKsyqyqDfhQZgUM8Q8nNsqayzcRv-G4/edit"
      },
      {
        "label": "Hackathon project",
        "url": "https://claw-a-thon.greennode.ai/project/ai-assisted-interviewer"
      },
      {
        "label": "Personal demo on Facebook",
        "url": "https://www.facebook.com/reel/1677589213355288/"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/hr-interview-agent.webp",
    "thumbnailAlt": "AI Interviewer — Autonomous AI Interviewer — the team’s original hackathon product poster",
    "demo": {
      "title": "See the interview agent in action.",
      "src": "assets/projects/interview-demo/ai-interviewer-demo.mp4",
      "poster": "assets/projects/interview-demo/ai-interviewer-poster.jpg",
      "duration": "12:03",
      "caption": "My recorded demo of the AI Interviewer prototype, with voice conversation and technical follow-up questions."
    }
  },
  {
    "id": "research-radar",
    "title": "Research Radar",
    "category": "agents",
    "context": "Personal proof of concept",
    "summary": "A Telegram-triggered workflow that turns selected research papers into short video digests.",
    "stack": [
      "AI agents",
      "Research workflows",
      "Video generation",
      "Telegram"
    ],
    "sections": [
      {
        "title": "The idea",
        "body": "Make a growing research reading list easier to explore. The experiment brings discovery, screening, assessment and a short audiovisual explanation into one workflow."
      },
      {
        "title": "How it works",
        "body": "A Telegram request starts seven stages: trigger, discover, gate, assess, generate script/voiceover/images, render video, and deliver the digest back to Telegram."
      },
      {
        "title": "What this demonstrates",
        "body": "Connecting tools around a useful end-to-end task, with explicit selection stages before content generation. This is a personal prototype, not a validated research-review service."
      }
    ],
    "media": [
      {
        "src": "assets/research-radar-linkedin.jpg",
        "alt": "Research Radar workflow shared by Khoa on LinkedIn",
        "caption": "The original workflow shared with the prototype."
      }
    ],
    "documents": [],
    "sources": [
      {
        "label": "Original project post",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7459215570140393472/"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/research-radar.webp",
    "thumbnailAlt": "Research Radar workflow shared by Khoa on LinkedIn"
  },
  {
    "id": "data-engineering-collection",
    "title": "Data engineering: models, lakes and pipelines",
    "category": "engineering",
    "context": "Udacity Data Engineering Nanodegree project collection.",
    "summary": "Six connected projects covering the foundations of reliable analytical data systems, from relational models to orchestration.",
    "stack": [
      "Python",
      "SQL",
      "PostgreSQL",
      "Apache Cassandra",
      "AWS S3",
      "Redshift",
      "PySpark",
      "Apache Airflow"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Raw event and reference data must become queryable, dependable analytical tables."
      },
      {
        "title": "The work",
        "body": "Model music-streaming events for relational and query-driven NoSQL access.\n\nBuild S3-to-Redshift and Spark-based analytical pipelines.\n\nOrchestrate staging, table loads and data-quality checks with Airflow.\n\nDesign a capstone model joining immigration, airport, demographic and temperature data."
      },
      {
        "title": "What the artifacts show",
        "body": "Includes ETL code, SQL schemas, custom Airflow operators and three original architecture/model diagrams."
      },
      {
        "title": "What I learned",
        "body": "Choose models around access patterns and make quality checks part of the pipeline."
      },
      {
        "title": "Project scope",
        "body": "Coursework using teaching datasets and scenarios; not an employer production system."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/de-airflow-dag.png",
        "alt": "Actual Airflow DAG: stage source data, load fact and dimensions, then check data quality.",
        "caption": "Actual Airflow DAG: stage source data, load fact and dimensions, then check data quality."
      },
      {
        "src": "assets/projects/github/assets/de-postgres-model.png",
        "alt": "PostgreSQL star schema for song-play analysis.",
        "caption": "PostgreSQL star schema for song-play analysis."
      },
      {
        "src": "assets/projects/github/assets/de-capstone-model.png",
        "alt": "Capstone conceptual model connecting immigration facts with location-based dimensions.",
        "caption": "Capstone conceptual model connecting immigration facts with location-based dimensions."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/data-engineering-collection.html",
        "type": "html"
      },
      {
        "title": "ETL Pipeline Processing",
        "src": "assets/projects/github/reports/original/data-engineer-udacity-data-modeling-with-apache-cassandra-nosql-etl-pipeline-processing.html",
        "type": "html"
      },
      {
        "title": "etl",
        "src": "assets/projects/github/reports/original/data-engineer-udacity-data-modeling-with-postgres-etl.html",
        "type": "html"
      },
      {
        "title": "test",
        "src": "assets/projects/github/reports/original/data-engineer-udacity-data-modeling-with-postgres-test.html",
        "type": "html"
      },
      {
        "title": "Capstone Project Template",
        "src": "assets/projects/github/reports/original/data-engineer-udacity-final-capstone-project-capstone-project-template.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "Data-Engineer_Udacity",
        "url": "https://github.com/KeonPham/Data-Engineer_Udacity"
      }
    ],
    "collection": [
      {
        "title": "Relational data modeling",
        "body": "PostgreSQL star schema and ETL for song-play analysis."
      },
      {
        "title": "Query-driven NoSQL modeling",
        "body": "Apache Cassandra tables shaped around specific song-play queries."
      },
      {
        "title": "Cloud data warehouse",
        "body": "Stage JSON event and song data from S3 and load an analytical star schema."
      },
      {
        "title": "Spark data lake",
        "body": "Transform S3 source data with Spark into dimensional analytical tables."
      },
      {
        "title": "Orchestrated data pipelines",
        "body": "Reusable operators for staging, dimension and fact loads, followed by quality checks."
      },
      {
        "title": "Immigration data model",
        "body": "Integrate immigration, airports, city demographics and temperature data in a conceptual analytical model."
      }
    ],
    "thumbnail": "assets/projects/thumbnails/data-engineering-collection.webp",
    "thumbnailAlt": "Actual Airflow DAG: stage source data, load fact and dimensions, then check data quality."
  },
  {
    "id": "starbucks-offer-response",
    "title": "Understanding and predicting offer response",
    "category": "ml",
    "context": "Udacity capstone using simulated Starbucks rewards-app data, with a related Streamlit prototype.",
    "summary": "An offer-response study that moves from messy event data to model comparison and a prediction interface.",
    "stack": [
      "Python",
      "pandas",
      "scikit-learn",
      "XGBoost",
      "SHAP",
      "Streamlit"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Which customer and offer signals help estimate whether someone will respond to an offer?"
      },
      {
        "title": "The work",
        "body": "Join customer profiles, offer metadata and interaction events.\n\nClean placeholder ages, missing values and inconsistent event fields.\n\nCompare logistic regression, random forest and XGBoost, including a check for target leakage.\n\nAdd an interface for manual input and CSV-based predictions."
      },
      {
        "title": "What the artifacts show",
        "body": "Published model comparison explicitly distinguishes the leaked random-forest result from the corrected experiment.\n\nCompanion Streamlit code supports single-customer and batch prediction flows."
      },
      {
        "title": "What I learned",
        "body": "Treat unexpectedly strong model results as a reason to investigate leakage."
      },
      {
        "title": "Project scope",
        "body": "Educational simulated-data case; not commissioned work for Starbucks.\n\nMetrics shown are repository outputs, not a new independent benchmark."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/starbucks-model-comparison.png",
        "alt": "Original model comparison, including the leakage-affected result and corrected experiments.",
        "caption": "Original model comparison, including the leakage-affected result and corrected experiments."
      },
      {
        "src": "assets/projects/github/assets/optimizing-offer-impact-in-the-starbucks-reward-program-a-machine-learning-approach-figure-6.png",
        "alt": "Age distribution before cleaning, including the documented placeholder-value spike.",
        "caption": "Age distribution before cleaning, including the documented placeholder-value spike."
      },
      {
        "src": "assets/projects/github/assets/optimizing-offer-impact-in-the-starbucks-reward-program-a-machine-learning-approach-figure-7.png",
        "alt": "Income distribution in the simulated customer profiles.",
        "caption": "Income distribution in the simulated customer profiles."
      },
      {
        "src": "assets/projects/drive/public/projects/starbucks-rewards/page-05.webp",
        "alt": "Understanding Offer Response — Understanding the offer distribution",
        "caption": "Understanding the offer distribution"
      },
      {
        "src": "assets/projects/drive/public/projects/starbucks-rewards/page-08.webp",
        "alt": "Understanding Offer Response — Inspecting demographic data quality",
        "caption": "Inspecting demographic data quality"
      },
      {
        "src": "assets/projects/drive/public/projects/starbucks-rewards/page-19.webp",
        "alt": "Understanding Offer Response — Identifying feature leakage",
        "caption": "Identifying feature leakage"
      },
      {
        "src": "assets/projects/drive/public/projects/starbucks-rewards/page-22.webp",
        "alt": "Understanding Offer Response — Final model comparison",
        "caption": "Final model comparison"
      },
      {
        "src": "assets/projects/drive/public/projects/starbucks-rewards/page-25.webp",
        "alt": "Understanding Offer Response — SHAP feature explanations",
        "caption": "SHAP feature explanations"
      },
      {
        "src": "assets/projects/drive/public/projects/starbucks-rewards/page-26.webp",
        "alt": "Understanding Offer Response — Individual prediction explanation",
        "caption": "Individual prediction explanation"
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/starbucks-offer-response.html",
        "type": "html"
      },
      {
        "title": "Starbucks_Capstone_notebook",
        "src": "assets/projects/github/reports/original/optimizing-offer-impact-in-the-starbucks-reward-program-a-machine-learning-approach-starbucks-capstone-notebook.html",
        "type": "html"
      },
      {
        "title": "Full project document · 26 pages",
        "src": "assets/projects/drive/public/projects/starbucks-rewards/starbucks-rewards.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "Repository",
        "url": "https://github.com/KeonPham/Optimizing-Offer-Impact-in-the-Starbucks-Reward-Program-A-Machine-Learning-Approach"
      },
      {
        "label": "starbucks_response_app",
        "url": "https://github.com/KeonPham/starbucks_response_app"
      },
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1xhHqHIjOMI8XoaXU4DAOmtdnCx6_Ad5r/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/starbucks-offer-response.webp",
    "thumbnailAlt": "Original model comparison, including the leakage-affected result and corrected experiments."
  },
  {
    "id": "disaster-response",
    "title": "Classifying disaster-response messages",
    "category": "ml",
    "context": "Udacity data-science project and web-application prototype.",
    "summary": "An NLP pipeline and application for assigning multiple response categories to short messages.",
    "stack": [
      "Python",
      "NLTK",
      "scikit-learn",
      "SQLite",
      "Flask",
      "Plotly"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Unstructured messages can contain several needs that must be recognized together."
      },
      {
        "title": "The work",
        "body": "Clean and combine message and category data in an ETL pipeline.\n\nStore processed data in SQLite and tokenize text for model training.\n\nTrain and evaluate a multi-output text classifier.\n\nExpose message classification and dataset summaries through a Flask application."
      },
      {
        "title": "What the artifacts show",
        "body": "Includes the ETL, training and web-app components and an original per-category evaluation report."
      },
      {
        "title": "What I learned",
        "body": "Per-category precision and recall reveal uneven performance that a single headline metric can hide."
      },
      {
        "title": "Project scope",
        "body": "Educational prototype, not an operational emergency-response system."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/disaster-evaluation.png",
        "alt": "Original classifier evaluation showing precision, recall, F1 and support by message category.",
        "caption": "Original classifier evaluation showing precision, recall, F1 and support by message category."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/disaster-response.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "disaster_response_model",
        "url": "https://github.com/KeonPham/disaster_response_model"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/disaster-response.webp",
    "thumbnailAlt": "Original classifier evaluation showing precision, recall, F1 and support by message category."
  },
  {
    "id": "sparkify-churn",
    "title": "Reading churn signals from streaming events",
    "category": "ml",
    "context": "Udacity Sparkify project using a fictional music-streaming dataset.",
    "summary": "A PySpark workflow that turns listening and interaction logs into churn features and compares classifiers.",
    "stack": [
      "PySpark",
      "Spark MLlib",
      "Python",
      "pandas",
      "Matplotlib"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Raw event histories need to become customer-level features before churn can be modeled."
      },
      {
        "title": "The work",
        "body": "Clean event logs and aggregate activity at user level.\n\nEngineer signals from sessions, songs, artists, playlist additions and feedback.\n\nCompare logistic regression, random forest and gradient-boosted trees.\n\nInspect feature importance and tuning results."
      },
      {
        "title": "What the artifacts show",
        "body": "Original outputs show behavioral feature importance and how free/paid users split by status."
      },
      {
        "title": "What I learned",
        "body": "Translate event data into interpretable behavioral signals and assess generalization."
      },
      {
        "title": "Project scope",
        "body": "Fictional dataset; no real customer retention uplift is claimed."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/sparkify-churn-prediction-pyspark-figure-7.png",
        "alt": "Gradient-boosting feature importance from the original Sparkify notebook.",
        "caption": "Gradient-boosting feature importance from the original Sparkify notebook."
      },
      {
        "src": "assets/projects/github/assets/sparkify-churn-prediction-pyspark-figure-3.png",
        "alt": "Free and paid account levels grouped by active/inactive status.",
        "caption": "Free and paid account levels grouped by active/inactive status."
      },
      {
        "src": "assets/projects/github/assets/sparkify-churn-prediction-pyspark-figure-8.png",
        "alt": "Feature-importance output from the random-forest experiment.",
        "caption": "Feature-importance output from the random-forest experiment."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/sparkify-churn.html",
        "type": "html"
      },
      {
        "title": "Sparkify",
        "src": "assets/projects/github/reports/original/sparkify-churn-prediction-pyspark-sparkify.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "Sparkify_churn_prediction_Pyspark_",
        "url": "https://github.com/KeonPham/Sparkify_churn_prediction_Pyspark_"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/sparkify-churn.webp",
    "thumbnailAlt": "Gradient-boosting feature importance from the original Sparkify notebook."
  },
  {
    "id": "baywheels-rider-behavior",
    "title": "The rhythm of a bike-sharing city",
    "category": "analytics",
    "context": "Udacity Data Analyst exploration and explanatory presentation using 2019 Bay Wheels/Ford GoBike trips.",
    "summary": "Explore when people ride, how long they ride and how subscriber behavior differs from casual use.",
    "stack": [
      "Python",
      "pandas",
      "Matplotlib",
      "Seaborn"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "A trip table becomes useful when time and rider segments reveal practical patterns."
      },
      {
        "title": "The work",
        "body": "Derive hour, weekday, month, quarter and weekend features.\n\nUse log-scaled duration plots to manage a skewed distribution.\n\nCompare trip volume and duration across time and rider groups."
      },
      {
        "title": "What the artifacts show",
        "body": "Source analysis covers about 2.4 million trip records and shows morning/evening weekday peaks.\n\nSaved charts show hourly patterns, weekday/weekend mix and monthly variation."
      },
      {
        "title": "What I learned",
        "body": "Use exploratory detail to build a compact explanatory story."
      },
      {
        "title": "Project scope",
        "body": "Historical observational study; the plots do not prove why people chose to ride."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-05-figure-3.png",
        "alt": "Original hourly trip counts showing morning and evening peaks.",
        "caption": "Original hourly trip counts showing morning and evening peaks."
      },
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-05-figure-5.png",
        "alt": "Weekday/weekend share of trips in the analyzed 2019 dataset.",
        "caption": "Weekday/weekend share of trips in the analyzed 2019 dataset."
      },
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-05-figure-2.png",
        "alt": "Trip-duration distribution shown on a logarithmic scale.",
        "caption": "Trip-duration distribution shown on a logarithmic scale."
      },
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-05-figure-7.png",
        "alt": "Monthly trip counts across 2019.",
        "caption": "Monthly trip counts across 2019."
      },
      {
        "src": "assets/projects/drive/public/projects/bike-sharing-exploration/page-11.webp",
        "alt": "Bay Wheels Usage Patterns — Trip duration and hourly usage",
        "caption": "Trip duration and hourly usage"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-sharing-exploration/page-17.webp",
        "alt": "Bay Wheels Usage Patterns — Popular stations",
        "caption": "Popular stations"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-sharing-exploration/page-25.webp",
        "alt": "Bay Wheels Usage Patterns — Subscriber and customer patterns",
        "caption": "Subscriber and customer patterns"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-sharing-exploration/page-29.webp",
        "alt": "Bay Wheels Usage Patterns — Weekly and hourly usage heatmaps",
        "caption": "Weekly and hourly usage heatmaps"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-sharing-exploration/page-30.webp",
        "alt": "Bay Wheels Usage Patterns — Hourly demand and trip durations",
        "caption": "Hourly demand and trip durations"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-sharing-exploration/page-33.webp",
        "alt": "Bay Wheels Usage Patterns — Exploratory conclusions",
        "caption": "Exploratory conclusions"
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/baywheels-rider-behavior.html",
        "type": "html"
      },
      {
        "title": "Khoa Pham_Project 5_Part II_slide deck",
        "src": "assets/projects/github/reports/original/udacity-nanodegree-dataanalyst-project-05-khoa-pham-project-5-part-ii-slide-deck.html",
        "type": "html"
      },
      {
        "title": "Khoa Pham_Project 5_Part I_exploration",
        "src": "assets/projects/github/reports/original/udacity-nanodegree-dataanalyst-project-05-khoa-pham-project-5-part-i-exploration.html",
        "type": "html"
      },
      {
        "title": "Full project document · 34 pages",
        "src": "assets/projects/drive/public/projects/bike-sharing-exploration/bike-sharing-exploration.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "Udacity_NanoDegree_DataAnalyst_Project_05",
        "url": "https://github.com/KeonPham/Udacity_NanoDegree_DataAnalyst_Project_05"
      },
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1EQ8jHTBLq5oFBHkL0pWyfBCCRPb2oL0w/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/baywheels-rider-behavior.webp",
    "thumbnailAlt": "Original hourly trip counts showing morning and evening peaks."
  },
  {
    "id": "cloud-image-classification",
    "title": "Taking an image classifier into the cloud",
    "category": "vision",
    "context": "Two related Udacity AWS machine-learning projects: training and operationalization.",
    "summary": "Dog-breed classification used to practice training, tuning, serving and operating a cloud ML endpoint.",
    "stack": [
      "PyTorch",
      "ResNet50",
      "Amazon SageMaker",
      "AWS Lambda",
      "EC2",
      "S3"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Model development and model operation need a connected workflow."
      },
      {
        "title": "The work",
        "body": "Train and tune a ResNet-based classifier with SageMaker.\n\nUse debugger and profiler tooling to inspect training.\n\nCompare SageMaker and EC2 training paths and invoke a deployed endpoint through Lambda.\n\nExplore endpoint autoscaling, Lambda concurrency and access-policy tradeoffs."
      },
      {
        "title": "What the artifacts show",
        "body": "Includes an original training-to-deployment architecture diagram and cloud training/inference implementation."
      },
      {
        "title": "What I learned",
        "body": "A functioning endpoint also needs capacity planning, monitoring and carefully scoped access."
      },
      {
        "title": "Project scope",
        "body": "Coursework environment; no production uptime or security certification claim.\n\nCloud-console screenshots were omitted to avoid account and resource identifiers."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/sagemaker-project-diagram.png",
        "alt": "Original project architecture: data preparation, tuning, training, profiling, deployment and testing.",
        "caption": "Original project architecture: data preparation, tuning, training, profiling, deployment and testing."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/cloud-image-classification.html",
        "type": "html"
      },
      {
        "title": "train_and_deploy",
        "src": "assets/projects/github/reports/original/image-classification-using-aws-sagemaker-train-and-deploy.html",
        "type": "html"
      },
      {
        "title": "train_and_deploy_model",
        "src": "assets/projects/github/reports/original/operationalizing-an-aws-ml-project-train-and-deploy-model.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "Image-Classification-using-AWS-SageMaker",
        "url": "https://github.com/KeonPham/Image-Classification-using-AWS-SageMaker"
      },
      {
        "label": "Operationalizing-an-AWS-ML-Project",
        "url": "https://github.com/KeonPham/Operationalizing-an-AWS-ML-Project"
      }
    ],
    "collection": [
      {
        "title": "Image Classification using AWS SageMaker",
        "body": "Train, tune, debug and deploy a dog-breed classifier."
      },
      {
        "title": "Operationalizing an AWS ML Project",
        "body": "Explore EC2 training, Lambda invocation, autoscaling, concurrency and access policies."
      }
    ],
    "thumbnail": "assets/projects/thumbnails/cloud-image-classification.webp",
    "thumbnailAlt": "Original project architecture: data preparation, tuning, training, profiling, deployment and testing."
  },
  {
    "id": "scones-ml-workflow",
    "title": "A confidence-aware image classification workflow",
    "category": "engineering",
    "context": "Udacity Scones Unlimited project using a fictional delivery company scenario.",
    "summary": "A serverless workflow that routes image-classification results through a confidence check.",
    "stack": [
      "Amazon SageMaker",
      "AWS Lambda",
      "Step Functions",
      "Python"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "A prediction workflow needs to respond sensibly when model confidence is too low."
      },
      {
        "title": "The work",
        "body": "Prepare bicycle and motorcycle image data and train a SageMaker classifier.\n\nConnect preprocessing and inference with Lambda and Step Functions.\n\nApply a confidence threshold and inspect recent inference results."
      },
      {
        "title": "What the artifacts show",
        "body": "Notebook contains saved confidence-monitoring plots and example inference outputs."
      },
      {
        "title": "What I learned",
        "body": "Build evaluation and failure handling into orchestration rather than treating inference as a single call."
      },
      {
        "title": "Project scope",
        "body": "Teaching prototype and low-resolution course images; no real delivery operation claimed."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/build-a-ml-workflow-for-scones-unlimited-on-amazon-sagemaker-figure-2.png",
        "alt": "Saved inference-confidence plot with the configured threshold shown as a dashed line.",
        "caption": "Saved inference-confidence plot with the configured threshold shown as a dashed line."
      },
      {
        "src": "assets/projects/github/assets/build-a-ml-workflow-for-scones-unlimited-on-amazon-sagemaker-figure-3.png",
        "alt": "One original notebook example pairing an input image with its inference confidence.",
        "caption": "One original notebook example pairing an input image with its inference confidence."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/scones-ml-workflow.html",
        "type": "html"
      },
      {
        "title": "starter",
        "src": "assets/projects/github/reports/original/build-a-ml-workflow-for-scones-unlimited-on-amazon-sagemaker-starter.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "Build-a-ML-Workflow-For-Scones-Unlimited-On-Amazon-SageMaker",
        "url": "https://github.com/KeonPham/Build-a-ML-Workflow-For-Scones-Unlimited-On-Amazon-SageMaker"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/scones-ml-workflow.webp",
    "thumbnailAlt": "Saved inference-confidence plot with the configured threshold shown as a dashed line."
  },
  {
    "id": "autogluon-bike-demand",
    "title": "Improving a bike-demand prediction baseline",
    "category": "ml",
    "context": "Udacity project using the Kaggle Bike Sharing Demand dataset.",
    "summary": "An AutoGluon experiment comparing a first baseline, time features and hyperparameter tuning.",
    "stack": [
      "Python",
      "AutoGluon",
      "pandas",
      "Amazon SageMaker"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "A raw baseline leaves useful time and weather structure unexplored."
      },
      {
        "title": "The work",
        "body": "Train an initial tabular predictor.\n\nEngineer calendar and time features and compare distributions.\n\nTune the model and compare the saved competition scores."
      },
      {
        "title": "What the artifacts show",
        "body": "Saved test-score chart shows improvement across the initial, feature-engineered and tuned experiments."
      },
      {
        "title": "What I learned",
        "body": "Feature quality and evaluation choices can matter as much as model selection."
      },
      {
        "title": "Project scope",
        "body": "Competition experiment; scores are historical notebook outputs."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/autogluon-test-score.png",
        "alt": "Original test-evaluation score comparison across the baseline, added features and tuning.",
        "caption": "Original test-evaluation score comparison across the baseline, added features and tuning."
      },
      {
        "src": "assets/projects/github/assets/predict-bike-sharing-demand-with-autogluon-figure-3.png",
        "alt": "Feature-correlation heatmap from the experiment notebook.",
        "caption": "Feature-correlation heatmap from the experiment notebook."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/autogluon-bike-demand.html",
        "type": "html"
      },
      {
        "title": "project-template",
        "src": "assets/projects/github/reports/original/predict-bike-sharing-demand-with-autogluon-project-template.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "Predict-Bike-Sharing-Demand-with-AutoGluon",
        "url": "https://github.com/KeonPham/Predict-Bike-Sharing-Demand-with-AutoGluon"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/autogluon-bike-demand.webp",
    "thumbnailAlt": "Original test-evaluation score comparison across the baseline, added features and tuning."
  },
  {
    "id": "bike-rental-app",
    "title": "Bike rental demand: a prediction interface",
    "category": "ml",
    "context": "Independent Streamlit application repository.",
    "summary": "A simple interface for single and batch rental-demand predictions using weather and time inputs.",
    "stack": [
      "Python",
      "Streamlit",
      "pandas",
      "scikit-learn",
      "Random Forest"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "A model is easier to explore when people can enter scenarios and inspect predictions."
      },
      {
        "title": "The work",
        "body": "Convert dates, weather and seasonal fields into the expected model features.\n\nSupport a single-scenario form and CSV batch uploads.\n\nProvide demo data, result tables and prediction charts."
      },
      {
        "title": "What the artifacts show",
        "body": "Public app code includes single and batch prediction flows and a saved random-forest model."
      },
      {
        "title": "What I learned",
        "body": "Keep inference feature preparation consistent with the trained model."
      },
      {
        "title": "Project scope",
        "body": "No actual app screenshot was present in the public repository; use a code/feature preview instead of inventing one.\n\nNot assumed to be the same model as the separate AutoGluon coursework."
      }
    ],
    "media": [],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/bike-rental-app.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "bike_rental_prediction_app",
        "url": "https://github.com/KeonPham/bike_rental_prediction_app"
      }
    ]
  },
  {
    "id": "churn-clean-code",
    "title": "Turning a churn notebook into maintainable code",
    "category": "ml",
    "context": "Udacity ML DevOps project.",
    "summary": "A customer-churn analysis refactored into reusable functions, logging and tests.",
    "stack": [
      "Python",
      "pandas",
      "scikit-learn",
      "Matplotlib",
      "Logging",
      "Testing"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "An exploratory notebook is difficult to maintain as a repeatable workflow."
      },
      {
        "title": "The work",
        "body": "Separate ingestion, exploratory analysis, feature preparation and training.\n\nCompare logistic regression and random forest using ROC curves.\n\nAdd a script for logging and function tests."
      },
      {
        "title": "What the artifacts show",
        "body": "Repository includes churn_library.py, a logging/test script and saved analytical outputs."
      },
      {
        "title": "What I learned",
        "body": "Software structure, testability and diagnostics are part of delivering ML."
      },
      {
        "title": "Project scope",
        "body": "Course dataset and historical model outputs; no commercial churn impact claimed."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/predict-customer-churn-clean-code-figure-7.png",
        "alt": "Original ROC comparison of random forest and logistic regression.",
        "caption": "Original ROC comparison of random forest and logistic regression."
      },
      {
        "src": "assets/projects/github/assets/predict-customer-churn-clean-code-figure-4.png",
        "alt": "Distribution of transaction count in the course dataset.",
        "caption": "Distribution of transaction count in the course dataset."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/churn-clean-code.html",
        "type": "html"
      },
      {
        "title": "Guide",
        "src": "assets/projects/github/reports/original/predict-customer-churn-clean-code-guide.html",
        "type": "html"
      },
      {
        "title": "churn_notebook",
        "src": "assets/projects/github/reports/original/predict-customer-churn-clean-code-churn-notebook.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "predict-customer-churn-clean-code",
        "url": "https://github.com/KeonPham/predict-customer-churn-clean-code"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/churn-clean-code.webp",
    "thumbnailAlt": "Original ROC comparison of random forest and logistic regression."
  },
  {
    "id": "ibm-recommendations",
    "title": "Exploring article recommendation strategies",
    "category": "ml",
    "context": "Udacity Recommendations with IBM learning project.",
    "summary": "Compare popularity, collaborative filtering and matrix factorization for article discovery.",
    "stack": [
      "Python",
      "pandas",
      "NumPy",
      "SVD",
      "Collaborative filtering"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Different recommendation methods face different data-sparsity and cold-start constraints."
      },
      {
        "title": "The work",
        "body": "Explore article interactions and construct a user-item matrix.\n\nImplement rank-based and user-user collaborative recommendations.\n\nEvaluate SVD matrix factorization across different numbers of latent features."
      },
      {
        "title": "What the artifacts show",
        "body": "Saved figures expose the gap between training and test behavior as model complexity increases."
      },
      {
        "title": "What I learned",
        "body": "A better training fit does not automatically mean better recommendations for unseen interactions."
      },
      {
        "title": "Project scope",
        "body": "Coursework using IBM article-interaction data, not an engagement for IBM.\n\nAccuracy is the notebook’s metric; it is not a demonstrated online recommendation uplift."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/recommendations-with-ibm-figure-3.png",
        "alt": "Original train/test accuracy curves as the number of latent features increases.",
        "caption": "Original train/test accuracy curves as the number of latent features increases."
      },
      {
        "src": "assets/projects/github/assets/recommendations-with-ibm-figure-1.png",
        "alt": "Distribution of how many articles users interact with.",
        "caption": "Distribution of how many articles users interact with."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/ibm-recommendations.html",
        "type": "html"
      },
      {
        "title": "Recommendations_with_IBM",
        "src": "assets/projects/github/reports/original/recommendations-with-ibm-recommendations-with-ibm.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "Recommendations-with-IBM",
        "url": "https://github.com/KeonPham/Recommendations-with-IBM"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/ibm-recommendations.webp",
    "thumbnailAlt": "Original train/test accuracy curves as the number of latent features increases."
  },
  {
    "id": "developer-ai-adoption",
    "title": "How developers describe AI adoption",
    "category": "analytics",
    "context": "Exploratory study of the public 2023 Stack Overflow Developer Survey.",
    "summary": "An analysis of reported AI usage, benefits and sentiment across age and programming-experience groups.",
    "stack": [
      "Python",
      "pandas",
      "NumPy",
      "Matplotlib",
      "Seaborn"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "AI adoption is not described by a single average developer profile."
      },
      {
        "title": "The work",
        "body": "Clean survey fields and handle missing responses.\n\nCompare AI selection categories across programming experience.\n\nVisualize perceived benefits and sentiment across age groups."
      },
      {
        "title": "What the artifacts show",
        "body": "Three original survey figures and a companion written article communicate the findings."
      },
      {
        "title": "What I learned",
        "body": "Turn survey data into accessible comparisons while distinguishing association from causation."
      },
      {
        "title": "Project scope",
        "body": "Observational and self-reported survey data; no causal claim about age or experience."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/ds-stackoverflow-survey-results-public-figure-3.png",
        "alt": "Reported AI sentiment by age group in the survey analysis.",
        "caption": "Reported AI sentiment by age group in the survey analysis."
      },
      {
        "src": "assets/projects/github/assets/ds-stackoverflow-survey-results-public-figure-2.png",
        "alt": "Perceived AI benefits by age group.",
        "caption": "Perceived AI benefits by age group."
      },
      {
        "src": "assets/projects/github/assets/ds-stackoverflow-survey-results-public-figure-1.png",
        "alt": "AI-selection categories across programming-experience groups.",
        "caption": "AI-selection categories across programming-experience groups."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/developer-ai-adoption.html",
        "type": "html"
      },
      {
        "title": "stackoverflow_survey_analysis",
        "src": "assets/projects/github/reports/original/ds-stackoverflow-survey-results-public-stackoverflow-survey-analysis.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "DS_Stackoverflow_survey_results_public",
        "url": "https://github.com/KeonPham/DS_Stackoverflow_survey_results_public"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/developer-ai-adoption.webp",
    "thumbnailAlt": "Reported AI sentiment by age group in the survey analysis."
  },
  {
    "id": "bigquery-ecommerce",
    "title": "SQL exploration: BigQuery & SQL Server",
    "category": "engineering",
    "context": "SQL analysis using the public Google Analytics sample dataset.",
    "summary": "A collection of BigQuery queries covering traffic, transactions, revenue and shopping behavior.",
    "stack": [
      "SQL",
      "Google BigQuery",
      "Google Analytics",
      "SQL Server",
      "CTEs",
      "Window functions"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Web analytics data needs clear business questions and consistent aggregation."
      },
      {
        "title": "The work",
        "body": "Aggregate visits, page views, transactions and revenue by month.\n\nCompare bounce rates and revenue by traffic source.\n\nWork with nested hit/product data to inspect purchasing behavior."
      },
      {
        "title": "What the artifacts show",
        "body": "A public SQL analysis file contains the query collection against the Google Analytics sample dataset."
      },
      {
        "title": "What I learned",
        "body": "Work with nested data, date-sharded tables and business metric definitions."
      },
      {
        "title": "Project scope",
        "body": "No saved result image was present. The source queries were inspected, not rerun.\n\nRevenue unit conversions differ in parts of the historical query file; avoid publishing derived revenue claims without review."
      },
      {
        "title": "The learning collection",
        "body": "The accompanying coursework document also includes SQL Server common table expressions and LAG examples. It is retained as an original learning artifact; draft dates and labels have not been presented as validated business results."
      }
    ],
    "media": [
      {
        "src": "assets/projects/drive/public/projects/sql-portfolio/page-01.webp",
        "alt": "SQL Practice Portfolio — BigQuery ecommerce exercises",
        "caption": "BigQuery ecommerce exercises"
      },
      {
        "src": "assets/projects/drive/public/projects/sql-portfolio/page-02.webp",
        "alt": "SQL Practice Portfolio — Traffic-source and revenue queries",
        "caption": "Traffic-source and revenue queries"
      },
      {
        "src": "assets/projects/drive/public/projects/sql-portfolio/page-05.webp",
        "alt": "SQL Practice Portfolio — Spend and product-purchase queries",
        "caption": "Spend and product-purchase queries"
      },
      {
        "src": "assets/projects/drive/public/projects/sql-portfolio/page-07.webp",
        "alt": "SQL Practice Portfolio — SQL Server common table expressions and LAG",
        "caption": "SQL Server common table expressions and LAG"
      },
      {
        "src": "assets/projects/drive/public/projects/sql-portfolio/page-08.webp",
        "alt": "SQL Practice Portfolio — SQL query results",
        "caption": "SQL query results"
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/bigquery-ecommerce.html",
        "type": "html"
      },
      {
        "title": "Full project document · 8 pages",
        "src": "assets/projects/drive/public/projects/sql-portfolio/sql-portfolio.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "BigQuery-SQL-Project",
        "url": "https://github.com/KeonPham/BigQuery-SQL-Project"
      },
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1gRRXVef5s2IwJHdrRXIYLNYMr9c9gYam/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/bigquery-ecommerce.webp",
    "thumbnailAlt": "SQL Practice Portfolio — BigQuery ecommerce exercises"
  },
  {
    "id": "weather-trends",
    "title": "Local temperature trends in a global context",
    "category": "analytics",
    "context": "Udacity Data Analyst project: Explore Weather Trends.",
    "summary": "Compare Hanoi and Ho Chi Minh City temperature histories with global trends.",
    "stack": [
      "Python",
      "pandas",
      "Matplotlib"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Long-term local variation is easier to understand alongside a global baseline."
      },
      {
        "title": "The work",
        "body": "Prepare local and global temperature series.\n\nUse moving averages to compare longer-term patterns.\n\nVisualize the series and their associations."
      },
      {
        "title": "What the artifacts show",
        "body": "Original analysis includes a multi-series trend chart and correlation heatmap."
      },
      {
        "title": "What I learned",
        "body": "Use smoothing and common reference points to make time-series comparisons readable."
      },
      {
        "title": "Project scope",
        "body": "Exploratory teaching analysis, not a climate attribution study."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-01-figure-1.png",
        "alt": "Original local/global temperature comparison with moving-average series.",
        "caption": "Original local/global temperature comparison with moving-average series."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/weather-trends.html",
        "type": "html"
      },
      {
        "title": "Khoa Pham_Project 1_DAND",
        "src": "assets/projects/github/reports/original/udacity-nanodegree-dataanalyst-project-01-khoa-pham-project-1-dand.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "Udacity_NanoDegree_DataAnalyst_Project_01",
        "url": "https://github.com/KeonPham/Udacity_NanoDegree_DataAnalyst_Project_01"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/weather-trends.webp",
    "thumbnailAlt": "Original local/global temperature comparison with moving-average series."
  },
  {
    "id": "movie-dataset",
    "title": "Exploring the economics of movies",
    "category": "analytics",
    "context": "Udacity Data Analyst project using a TMDB movie dataset.",
    "summary": "Investigate how revenue, budget, genre, runtime and release year vary across films.",
    "stack": [
      "Python",
      "pandas",
      "Matplotlib",
      "Seaborn"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "A broad movie dataset contains several plausible stories, but missing and skewed values need care."
      },
      {
        "title": "The work",
        "body": "Inspect numerical distributions and clean the movie data.\n\nCompare budgets and revenues across genres.\n\nExplore runtime, release-year and cast/director patterns."
      },
      {
        "title": "What the artifacts show",
        "body": "Original figures show genre-level budget/revenue comparisons and movie revenue rankings."
      },
      {
        "title": "What I learned",
        "body": "Build a coherent analytical narrative while keeping observational associations separate from causal claims."
      },
      {
        "title": "Project scope",
        "body": "Historical movie dataset; missing and zero budget/revenue entries affect interpretation."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-02-figure-7.png",
        "alt": "Original comparison of average revenue and budget by genre.",
        "caption": "Original comparison of average revenue and budget by genre."
      },
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-02-figure-3.png",
        "alt": "Top-revenue movies in the analyzed dataset.",
        "caption": "Top-revenue movies in the analyzed dataset."
      },
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-02-figure-4.png",
        "alt": "Runtime distribution for the project’s profitable-movie subset.",
        "caption": "Runtime distribution for the project’s profitable-movie subset."
      },
      {
        "src": "assets/projects/drive/public/projects/movie-reviews/page-01.webp",
        "alt": "Exploring Movie Performance — Questions and analysis scope",
        "caption": "Questions and analysis scope"
      },
      {
        "src": "assets/projects/drive/public/projects/movie-reviews/page-15.webp",
        "alt": "Exploring Movie Performance — Revenue distribution and runtime",
        "caption": "Revenue distribution and runtime"
      },
      {
        "src": "assets/projects/drive/public/projects/movie-reviews/page-19.webp",
        "alt": "Exploring Movie Performance — Budget and revenue by genre",
        "caption": "Budget and revenue by genre"
      },
      {
        "src": "assets/projects/drive/public/projects/movie-reviews/page-24.webp",
        "alt": "Exploring Movie Performance — Comparing cast-level averages",
        "caption": "Comparing cast-level averages"
      },
      {
        "src": "assets/projects/drive/public/projects/movie-reviews/page-29.webp",
        "alt": "Exploring Movie Performance — Correlation analysis",
        "caption": "Correlation analysis"
      },
      {
        "src": "assets/projects/drive/public/projects/movie-reviews/page-30.webp",
        "alt": "Exploring Movie Performance — Movie-tagline word cloud",
        "caption": "Movie-tagline word cloud"
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/movie-dataset.html",
        "type": "html"
      },
      {
        "title": "Khoa Pham_Investigate Dataset Project",
        "src": "assets/projects/github/reports/original/udacity-nanodegree-dataanalyst-project-02-khoa-pham-investigate-dataset-project.html",
        "type": "html"
      },
      {
        "title": "Full project document · 31 pages",
        "src": "assets/projects/drive/public/projects/movie-reviews/movie-reviews.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "Udacity_NanoDegree_DataAnalyst_Project_02",
        "url": "https://github.com/KeonPham/Udacity_NanoDegree_DataAnalyst_Project_02"
      },
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1RqCvbr_di-yk2UWHadpbWjcJBMNehJNw/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/movie-dataset.webp",
    "thumbnailAlt": "Original comparison of average revenue and budget by genre."
  },
  {
    "id": "ab-testing",
    "title": "Evaluating a proposed landing-page change",
    "category": "analytics",
    "context": "Udacity Data Analyst A/B-testing project.",
    "summary": "A practical exercise in conversion-rate experiments, simulation and regression.",
    "stack": [
      "Python",
      "pandas",
      "NumPy",
      "statsmodels",
      "Matplotlib"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "A new page should be evaluated with evidence rather than assumed to improve conversion."
      },
      {
        "title": "The work",
        "body": "Clean assignment and landing-page records.\n\nSimulate a null distribution of conversion-rate differences.\n\nFit logistic regression and explore country/page interactions."
      },
      {
        "title": "What the artifacts show",
        "body": "Notebook includes a saved null-distribution plot with the observed difference marked."
      },
      {
        "title": "What I learned",
        "body": "Connect hypothesis testing to a product decision and interpret uncertainty carefully."
      },
      {
        "title": "Project scope",
        "body": "Learning exercise; no live business experiment or conversion uplift claimed."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-03-figure-1.png",
        "alt": "Original simulated null distribution with the observed difference marked in red.",
        "caption": "Original simulated null distribution with the observed difference marked in red."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/ab-testing.html",
        "type": "html"
      },
      {
        "title": "Analyze_ab_test_results_notebook",
        "src": "assets/projects/github/reports/original/udacity-nanodegree-dataanalyst-project-03-analyze-ab-test-results-notebook.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "Udacity_NanoDegree_DataAnalyst_Project_03",
        "url": "https://github.com/KeonPham/Udacity_NanoDegree_DataAnalyst_Project_03"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/ab-testing.webp",
    "thumbnailAlt": "Original simulated null distribution with the observed difference marked in red."
  },
  {
    "id": "weratedogs-wrangling",
    "title": "From messy social data to a usable dataset",
    "category": "analytics",
    "context": "Udacity Data Analyst WeRateDogs data-wrangling project.",
    "summary": "Gather, assess and clean social-post records and image predictions before exploring the combined data.",
    "stack": [
      "Python",
      "pandas",
      "Data wrangling",
      "Matplotlib",
      "Seaborn"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Inconsistent fields and multiple source tables make even simple analysis unreliable."
      },
      {
        "title": "The work",
        "body": "Gather archive records and image-prediction data.\n\nIdentify quality and tidiness issues and create a cleaned master table.\n\nExplore breed distributions, prediction confidence and engagement patterns."
      },
      {
        "title": "What the artifacts show",
        "body": "Original figures summarize top predicted breeds and the relationship between likes and retweets."
      },
      {
        "title": "What I learned",
        "body": "Document cleaning decisions and distinguish prediction confidence from measured accuracy."
      },
      {
        "title": "Project scope",
        "body": "Aggregated figures only; individual social-post records are not republished.\n\nAn original plot titled “accuracy” actually summarizes dog-classification flags and is not included."
      }
    ],
    "media": [
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-04-figure-4.png",
        "alt": "Most frequent first-choice predicted breeds in the cleaned archive.",
        "caption": "Most frequent first-choice predicted breeds in the cleaned archive."
      },
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-04-figure-5.png",
        "alt": "Original plot of favorite counts against retweet counts.",
        "caption": "Original plot of favorite counts against retweet counts."
      },
      {
        "src": "assets/projects/github/assets/udacity-nanodegree-dataanalyst-project-04-figure-2.png",
        "alt": "Confidence distributions for the three image-prediction ranks.",
        "caption": "Confidence distributions for the three image-prediction ranks."
      }
    ],
    "documents": [
      {
        "title": "Code & analysis notes",
        "src": "assets/projects/github/reports/weratedogs-wrangling.html",
        "type": "html"
      },
      {
        "title": "wrangle_act",
        "src": "assets/projects/github/reports/original/udacity-nanodegree-dataanalyst-project-04-wrangle-act.html",
        "type": "html"
      }
    ],
    "sources": [
      {
        "label": "Udacity_NanoDegree_DataAnalyst_Project_04",
        "url": "https://github.com/KeonPham/Udacity_NanoDegree_DataAnalyst_Project_04"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/weratedogs-wrangling.webp",
    "thumbnailAlt": "Most frequent first-choice predicted breeds in the cleaned archive."
  },
  {
    "id": "tb-classification",
    "title": "Tuberculosis Classification Study",
    "category": "vision",
    "context": "AIT academic research · Retrospective public-dataset experiment",
    "summary": "A comparative study of CNN, transfer-learning and CNN–Transformer models for classifying chest X-rays.",
    "stack": [
      "Python",
      "ResNet18",
      "EfficientNet-B4",
      "Vision Transformer",
      "Cross-validation",
      "Attention visualization"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "The study asks how different architectures behave on the same TB classification task, including the trade-off between sensitivity, specificity and generalization."
      },
      {
        "title": "The work",
        "body": "Compared SimpleCNN, an enhanced CNN, EfficientNet-B4 and a hybrid ResNet18–Vision Transformer model.\n\nUsed stratified five-fold cross-validation, augmentation and a separate 96-image test set from the report's dataset split.\n\nExamined confusion matrices, ROC curves and attention visualizations alongside aggregate metrics."
      },
      {
        "title": "What the artifacts show",
        "body": "The report records 94.79% test accuracy and 97.96% sensitivity for the hybrid model on the 96-image test set.\n\nThe reported mean cross-validation accuracy is 86.00%, a different measurement from the held-out test result.\n\nA five-page research report and real result figures document the experiment."
      },
      {
        "title": "What I learned",
        "body": "Model comparison is more useful when the validation protocol and dataset size are visible.\n\nThese results support an academic comparison; they do not establish clinical readiness or superiority across medical settings."
      }
    ],
    "media": [
      {
        "src": "assets/projects/drive/public/projects/tb-classification/page-02.webp",
        "alt": "Tuberculosis Classification Study — Dataset and preprocessing examples",
        "caption": "Dataset and preprocessing examples"
      },
      {
        "src": "assets/projects/drive/public/projects/tb-classification/page-03.webp",
        "alt": "Tuberculosis Classification Study — Image preprocessing and augmentation",
        "caption": "Image preprocessing and augmentation"
      },
      {
        "src": "assets/projects/drive/public/projects/tb-classification/page-04.webp",
        "alt": "Tuberculosis Classification Study — Model architecture and evaluation",
        "caption": "Model architecture and evaluation"
      },
      {
        "src": "assets/projects/drive/public/projects/tb-classification/page-05.webp",
        "alt": "Tuberculosis Classification Study — Results and visual explanations",
        "caption": "Results and visual explanations"
      }
    ],
    "documents": [
      {
        "title": "Full project document · 5 pages",
        "src": "assets/projects/drive/public/projects/tb-classification/tb-classification.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/13fgKlZXQPIgB8h-wyGnF9g3AF4OKX8uc/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/tb-classification.webp",
    "thumbnailAlt": "Tuberculosis Classification Study — Dataset and preprocessing examples"
  },
  {
    "id": "bike-demand-forecast",
    "title": "Bike-Sharing Demand Forecast",
    "category": "ml",
    "context": "AIT coursework · Forecasting and model evaluation",
    "summary": "An end-to-end demand-prediction study connecting feature engineering, temporal validation and model comparison.",
    "stack": [
      "Python",
      "Random Forest",
      "XGBoost",
      "LightGBM",
      "LSTM",
      "Bayesian optimization",
      "Time-series validation"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Bike-sharing operations need a view of how demand changes with time, weather and commuting patterns. This project models hourly rental counts while preserving the temporal structure of the data."
      },
      {
        "title": "The work",
        "body": "Explored seasonality, rush-hour behavior, holidays and weather; engineered time and weather features.\n\nCompared linear models, tree ensembles, SVR, LSTM and stacking with an expanding-window validation design.\n\nTuned Random Forest using Bayesian optimization and compared cross-validation and Kaggle results separately."
      },
      {
        "title": "What the artifacts show",
        "body": "The deck reports Random Forest CV RMSLE improving from 0.5924 to approximately 0.51 after tuning.\n\nThe corresponding Kaggle score moved from 0.5434 to 0.4669; this is distinct from the CV result.\n\nProduced a 37-slide presentation with pipeline diagrams, model comparisons and feature-importance analysis."
      },
      {
        "title": "What I learned",
        "body": "The LSTM's favorable validation result did not translate into a strong Kaggle result, illustrating why one metric or split should not drive the decision.\n\nTemporal validation and transparent comparison matter as much as model complexity."
      }
    ],
    "media": [
      {
        "src": "assets/projects/drive/public/projects/bike-demand-forecast/page-01.webp",
        "alt": "Bike-Sharing Demand Forecast — Predicting bike-sharing demand",
        "caption": "Predicting bike-sharing demand"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-demand-forecast/page-11.webp",
        "alt": "Bike-Sharing Demand Forecast — Demand patterns across the year",
        "caption": "Demand patterns across the year"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-demand-forecast/page-13.webp",
        "alt": "Bike-Sharing Demand Forecast — Training pipeline and temporal validation",
        "caption": "Training pipeline and temporal validation"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-demand-forecast/page-31.webp",
        "alt": "Bike-Sharing Demand Forecast — Model comparison after tuning",
        "caption": "Model comparison after tuning"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-demand-forecast/page-34.webp",
        "alt": "Bike-Sharing Demand Forecast — Comparing model performance",
        "caption": "Comparing model performance"
      },
      {
        "src": "assets/projects/drive/public/projects/bike-demand-forecast/page-35.webp",
        "alt": "Bike-Sharing Demand Forecast — Feature importance and explainability",
        "caption": "Feature importance and explainability"
      }
    ],
    "documents": [
      {
        "title": "Full project document · 37 pages",
        "src": "assets/projects/drive/public/projects/bike-demand-forecast/bike-demand-forecast.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1Ne4uoKU9ZukiY-GallKSf7Z0IdIGWOvt/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/bike-demand-forecast.webp",
    "thumbnailAlt": "Bike-Sharing Demand Forecast — Predicting bike-sharing demand"
  },
  {
    "id": "loan-approval",
    "title": "Loan Decision Analysis",
    "category": "ml",
    "context": "Academic classification exercise · Historical sample data",
    "summary": "A study of data preparation, exploratory analysis and classification models for loan-approval records.",
    "stack": [
      "Python",
      "Pandas",
      "Logistic Regression",
      "Random Forest",
      "XGBoost",
      "Stratified cross-validation"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Loan datasets combine missing values, categorical features and uneven outcome distributions. The exercise investigates how to prepare these records and compare predictive approaches."
      },
      {
        "title": "The work",
        "body": "Investigated missingness and relationships among income, loan amount, credit history and recorded decisions.\n\nEngineered features, compared classification models and used stratified five-fold evaluation.\n\nInspected confusion matrices, ROC curves, thresholds and feature importance rather than accuracy alone."
      },
      {
        "title": "What the artifacts show",
        "body": "Delivered a 25-slide analysis with preprocessing, exploratory charts, model comparison and evaluation outputs.\n\nThe report identifies credit history as a strong predictive feature in its sample and examines the trade-off between incorrect approvals and rejections."
      },
      {
        "title": "What I learned",
        "body": "Associations in historical approvals should not be interpreted as causal effects or fair decision rules.\n\nThis remains a learning exercise on recorded outcomes, with no production lending system or real-world credit decision claim."
      }
    ],
    "media": [
      {
        "src": "assets/projects/drive/public/projects/loan-approval/page-01.webp",
        "alt": "Loan Decision Analysis — Loan decision analysis",
        "caption": "Loan decision analysis"
      },
      {
        "src": "assets/projects/drive/public/projects/loan-approval/page-03.webp",
        "alt": "Loan Decision Analysis — Missing-value processing and preparation",
        "caption": "Missing-value processing and preparation"
      },
      {
        "src": "assets/projects/drive/public/projects/loan-approval/page-07.webp",
        "alt": "Loan Decision Analysis — Exploratory relationships in the sample dataset",
        "caption": "Exploratory relationships in the sample dataset"
      },
      {
        "src": "assets/projects/drive/public/projects/loan-approval/page-20.webp",
        "alt": "Loan Decision Analysis — Stratified cross-validation and model comparison",
        "caption": "Stratified cross-validation and model comparison"
      },
      {
        "src": "assets/projects/drive/public/projects/loan-approval/page-21.webp",
        "alt": "Loan Decision Analysis — Random Forest evaluation",
        "caption": "Random Forest evaluation"
      },
      {
        "src": "assets/projects/drive/public/projects/loan-approval/page-24.webp",
        "alt": "Loan Decision Analysis — Feature importance",
        "caption": "Feature importance"
      }
    ],
    "documents": [
      {
        "title": "Full project document · 25 pages",
        "src": "assets/projects/drive/public/projects/loan-approval/loan-approval.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1lzj_m8x3gDxZRtnqzfhrxUVK8mgaWpC4/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/loan-approval.webp",
    "thumbnailAlt": "Loan Decision Analysis — Loan decision analysis"
  },
  {
    "id": "customer-cohort",
    "title": "Customer Cohort Dashboard",
    "category": "analytics",
    "context": "Analytics portfolio exercise · Power BI",
    "summary": "Three complementary cohort views show how customer counts, retention and spending change after the first purchase.",
    "stack": [
      "Power BI",
      "Cohort analysis",
      "Customer analytics",
      "Data visualization"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "Aggregate revenue can hide differences between customer groups. A cohort view helps separate the experience of newer and older customer groups over their lifecycle."
      },
      {
        "title": "The work",
        "body": "Organized customers by cohort and compared activity at equivalent periods after acquisition.\n\nBuilt separate heatmaps for customer counts, retention and spending.\n\nUsed a consistent matrix layout so patterns across the three measures can be compared."
      },
      {
        "title": "What the artifacts show",
        "body": "Produced three genuine Power BI cohort visuals, included in the full portfolio PDF.\n\nThe work demonstrates customer-lifecycle analysis and clear analytical presentation; no causal retention uplift is claimed."
      },
      {
        "title": "What I learned",
        "body": "Counts, rates and value answer different questions and need distinct labels.\n\nReading cohorts at comparable ages is more informative than comparing totals across differently aged groups."
      }
    ],
    "media": [
      {
        "src": "assets/projects/drive/public/projects/customer-cohort/page-01.webp",
        "alt": "Customer Cohort Dashboard — Customer-count cohorts",
        "caption": "Customer-count cohorts"
      },
      {
        "src": "assets/projects/drive/public/projects/customer-cohort/page-02.webp",
        "alt": "Customer Cohort Dashboard — Retention cohorts",
        "caption": "Retention cohorts"
      },
      {
        "src": "assets/projects/drive/public/projects/customer-cohort/page-03.webp",
        "alt": "Customer Cohort Dashboard — Spending cohorts",
        "caption": "Spending cohorts"
      }
    ],
    "documents": [
      {
        "title": "Full project document · 3 pages",
        "src": "assets/projects/drive/public/projects/customer-cohort/customer-cohort.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1vaGQkLxLo3Y3ywJy8BWVD-xsjGGaWOUE/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/customer-cohort.webp",
    "thumbnailAlt": "Customer Cohort Dashboard — Customer-count cohorts"
  },
  {
    "id": "vending-location",
    "title": "Vending Location Strategy",
    "category": "analytics",
    "context": "Business analytics case study · Recommendations and projections",
    "summary": "A business case that moves from revenue patterns to a prioritized location and operating plan for vending machines.",
    "stack": [
      "Power BI",
      "Business analysis",
      "Pareto analysis",
      "Segmentation",
      "Revenue analytics",
      "Data storytelling"
    ],
    "sections": [
      {
        "title": "The problem",
        "body": "After a lockdown period, the analysis asks which operational changes could improve vending revenue and where a limited relocation effort should focus."
      },
      {
        "title": "The work",
        "body": "Structured the problem around machine productivity, location type, demand timing, product price points and payment channels.\n\nUsed Pareto and quadrant analyses to identify concentrated revenue and underperforming locations.\n\nProposed a staged relocation plan, supported by channel comparisons and day/hour operating patterns."
      },
      {
        "title": "What the artifacts show",
        "body": "The deck observes that about 20% of machines contribute 57% of revenue in the analyzed dataset.\n\nThe proposed relocation of 12 machines is estimated to add approximately VND 42 million, or 10% revenue growth.\n\nThese figures describe an analytical scenario and projected opportunity, not verified realized gains."
      },
      {
        "title": "What I learned",
        "body": "A recommendation becomes more useful when it names the next operational action and its assumptions.\n\nExecutive communication should separate observed facts, proposed actions and estimated value."
      }
    ],
    "media": [
      {
        "src": "assets/projects/drive/public/projects/vending-location/page-02.webp",
        "alt": "Vending Location Strategy — Breaking down the business problem",
        "caption": "Breaking down the business problem"
      },
      {
        "src": "assets/projects/drive/public/projects/vending-location/page-05.webp",
        "alt": "Vending Location Strategy — Machine productivity and revenue concentration",
        "caption": "Machine productivity and revenue concentration"
      },
      {
        "src": "assets/projects/drive/public/projects/vending-location/page-07.webp",
        "alt": "Vending Location Strategy — Location-productivity comparison",
        "caption": "Location-productivity comparison"
      },
      {
        "src": "assets/projects/drive/public/projects/vending-location/page-08.webp",
        "alt": "Vending Location Strategy — Proposed relocation scenario",
        "caption": "Proposed relocation scenario"
      },
      {
        "src": "assets/projects/drive/public/projects/vending-location/page-12.webp",
        "alt": "Vending Location Strategy — Trading patterns across days and hours",
        "caption": "Trading patterns across days and hours"
      },
      {
        "src": "assets/projects/drive/public/projects/vending-location/page-16.webp",
        "alt": "Vending Location Strategy — Recommendations and projected opportunity",
        "caption": "Recommendations and projected opportunity"
      }
    ],
    "documents": [
      {
        "title": "Full project document · 16 pages",
        "src": "assets/projects/drive/public/projects/vending-location/vending-location.pdf",
        "type": "pdf"
      }
    ],
    "sources": [
      {
        "label": "Original Drive artifact",
        "url": "https://drive.google.com/file/d/1RNzUd3d36SlIzY-_xIEq1i652puQTRSr/view"
      },
      {
        "label": "Original Power BI dashboard export",
        "url": "https://drive.google.com/file/d/1JXDTP9MRY1gNHijVZNV2yZIXpvD_TI1u/view"
      }
    ],
    "thumbnail": "assets/projects/thumbnails/vending-location.webp",
    "thumbnailAlt": "Vending Location Strategy — Breaking down the business problem",
    "dashboard": {
      "title": "Vending performance dashboard",
      "description": "Six views from my original Power BI report, with the complete 22-page export below. These are saved report pages; the slicers shown are not interactive.",
      "pages": [
        {
          "label": "Overview",
          "src": "assets/projects/vending-dashboard/dashboard-01-overview.webp",
          "alt": "Khoa Pham vending Power BI dashboard: revenue, sales quantity, daily trends and product performance",
          "caption": "Revenue, sales quantity, daily trends and product performance · original Power BI export · Page 1"
        },
        {
          "label": "Geography",
          "src": "assets/projects/vending-dashboard/dashboard-02-geography.webp",
          "alt": "Khoa Pham vending Power BI dashboard: district and location revenue, with the original geographic map",
          "caption": "District and location revenue, with the original geographic map · original Power BI export · Page 2"
        },
        {
          "label": "Locations",
          "src": "assets/projects/vending-dashboard/dashboard-08-locations.webp",
          "alt": "Khoa Pham vending Power BI dashboard: location-type performance, revenue distributions and machine productivity",
          "caption": "Location-type performance, revenue distributions and machine productivity · original Power BI export · Page 8"
        },
        {
          "label": "Products",
          "src": "assets/projects/vending-dashboard/dashboard-11-products.webp",
          "alt": "Khoa Pham vending Power BI dashboard: product revenue patterns and pareto analysis",
          "caption": "Product revenue patterns and Pareto analysis · original Power BI export · Page 11"
        },
        {
          "label": "Payments",
          "src": "assets/projects/vending-dashboard/dashboard-17-payments.webp",
          "alt": "Khoa Pham vending Power BI dashboard: payment-channel revenue, distributions and contribution",
          "caption": "Payment-channel revenue, distributions and contribution · original Power BI export · Page 17"
        },
        {
          "label": "Daily patterns",
          "src": "assets/projects/vending-dashboard/dashboard-19-payment-patterns.webp",
          "alt": "Khoa Pham vending Power BI dashboard: payment behavior by hour, day and weekend",
          "caption": "Payment behavior by hour, day and weekend · original Power BI export · Page 19"
        }
      ],
      "document": {
        "title": "Complete Power BI dashboard export · 22 pages",
        "src": "assets/projects/vending-dashboard/vending-dashboard.pdf",
        "type": "pdf"
      }
    }
  },
  {
    "id": "finance-brain",
    "title": "Finance Brain",
    "category": "agents",
    "context": "Personal proof of concept",
    "summary": "A local experiment combining document extraction, categorized records and conversational analysis.",
    "stack": [
      "LangGraph",
      "SQLite",
      "Document extraction",
      "Data visualization"
    ],
    "sections": [
      {
        "title": "From documents to questions",
        "body": "The prototype extracts and normalizes financial documents, categorizes records, stores them in SQLite, and uses a LangGraph ReAct workflow to answer questions and produce charts."
      },
      {
        "title": "A small system with clear boundaries",
        "body": "The emphasis is on connecting ingestion, structured storage and useful queries. The public portfolio describes the workflow; personal financial records and private screenshots are not part of this case study."
      }
    ],
    "collection": [
      {
        "title": "01 · Prepare",
        "body": "Extract and normalize document fields."
      },
      {
        "title": "02 · Organize",
        "body": "Categorize records and store structured data in SQLite."
      },
      {
        "title": "03 · Explore",
        "body": "Query through a LangGraph agent and inspect charts."
      }
    ],
    "media": [],
    "documents": [],
    "sources": [
      {
        "label": "Original project post",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7459215570140393472/"
      }
    ]
  },
  {
    "id": "transformer-timeseries",
    "title": "Time-series Transformer",
    "category": "ml",
    "context": "Independent learning experiment",
    "summary": "A weekend exploration of patch-based forecasting, normalization and autoregressive prediction on ETTh1.",
    "stack": [
      "Transformers",
      "ETTh1",
      "Patch embeddings",
      "RevIN"
    ],
    "sections": [
      {
        "title": "The experiment",
        "body": "The documented workflow explores patch embedding, RevIN normalization, decoder blocks, next-patch prediction and autoregressive inference across four iterations."
      },
      {
        "title": "The learning goal",
        "body": "Understand the moving parts of a forecasting architecture through implementation and iteration. The post documents a learning exercise; it does not establish a production forecasting benchmark."
      }
    ],
    "media": [],
    "documents": [],
    "sources": [
      {
        "label": "Original experiment post",
        "url": "https://www.linkedin.com/feed/update/urn:li:activity:7434030142366347264/"
      }
    ]
  }
];
window.PORTFOLIO_CREDENTIALS = {
  "education": [
    {
      "id": "ait",
      "media": [],
      "documents": []
    },
    {
      "id": "hcmus",
      "media": [
        {
          "src": "assets/projects/drive/public/credentials/hcmus-degree-excerpt.webp",
          "alt": "Bachelor of Science in Geology diploma excerpt showing the university, degree and Khoa Pham’s name",
          "caption": "BSc in Geology · university, qualification and holder excerpt"
        }
      ],
      "documents": []
    }
  ],
  "programs": [
    {
      "id": "deeplearning-ai-pytorch",
      "title": "PyTorch for Deep Learning",
      "provider": "DeepLearning.AI",
      "group": "data-ai",
      "kind": "Professional Certificate",
      "issued": "30 Sept 2026",
      "issuedISO": "2026-09-30",
      "credentialId": "22eac0c3-7eee-4a81-b4f0-8dcd28fd4e1b",
      "credentialUrl": "https://www.deeplearning.ai/certificates/22eac0c3-7eee-4a81-b4f0-8dcd28fd4e1b",
      "logo": "assets/credentials/deeplearning-ai-logo.png",
      "media": [
        {
          "src": "assets/credentials/deeplearning-ai-pytorch-page.png",
          "alt": "Public DeepLearning.AI certificate page for Khoa Pham Nguyen Thanh's PyTorch for Deep Learning Professional Certificate",
          "caption": "DeepLearning.AI PyTorch for Deep Learning Professional Certificate, completed by Khoa Pham Nguyen Thanh on September 30, 2026."
        }
      ],
      "evidence": "issuer_verified_credential",
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.deeplearning.ai/certificates/22eac0c3-7eee-4a81-b4f0-8dcd28fd4e1b"
        }
      ]
    },
    {
      "id": "deeplearning-ai-spec-driven-development",
      "title": "Spec-Driven Development with Coding Agents",
      "provider": "DeepLearning.AI",
      "group": "engineering",
      "kind": "Accomplishment",
      "issued": "24 May 2026",
      "issuedISO": "2026-05-24",
      "credentialId": "43eb373e-aea4-4bf0-93b8-316317ff6dc8",
      "credentialUrl": "https://www.deeplearning.ai/accomplishments/43eb373e-aea4-4bf0-93b8-316317ff6dc8",
      "logo": "assets/credentials/deeplearning-ai-logo.png",
      "media": [
        {
          "src": "assets/credentials/deeplearning-ai-spec-driven-development-page.png",
          "alt": "Public DeepLearning.AI accomplishment page for Khoa Pham Nguyen Thanh's Spec-Driven Development with Coding Agents course",
          "caption": "DeepLearning.AI accomplishment for Spec-Driven Development with Coding Agents, completed by Khoa Pham Nguyen Thanh on May 24, 2026."
        }
      ],
      "evidence": "issuer_verified_credential",
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.deeplearning.ai/accomplishments/43eb373e-aea4-4bf0-93b8-316317ff6dc8"
        }
      ]
    },
    {
      "id": "anthropic-introduction-claude-cowork",
      "title": "Introduction to Claude Cowork",
      "provider": "Anthropic",
      "group": "data-ai",
      "kind": "Course completion",
      "issued": "1 May 2026",
      "issuedISO": "2026-05-01",
      "credentialId": "7rqs73snufam",
      "credentialUrl": "https://verify.skilljar.com/c/7rqs73snufam",
      "logo": "assets/credentials/anthropic-logo.png",
      "media": [
        {
          "src": "assets/credentials/anthropic-introduction-claude-cowork.jpg",
          "alt": "Anthropic certificate of completion for Khoa Pham: Introduction to Claude Cowork, issued May 1, 2026.",
          "caption": "Introduction to Claude Cowork · Anthropic · May 1, 2026"
        }
      ],
      "evidence": "issuer_verified_credential",
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://verify.skilljar.com/c/7rqs73snufam"
        }
      ]
    },
    {
      "id": "imperial-mathematics-linear-algebra",
      "title": "Mathematics for Machine Learning: Linear Algebra",
      "provider": "Imperial College London",
      "group": "data-ai",
      "kind": "Course certificate",
      "issued": "28 Aug 2024",
      "issuedISO": "2024-08-28",
      "credentialId": "ZM54A9IKVVSR",
      "credentialUrl": "https://www.coursera.org/account/accomplishments/verify/ZM54A9IKVVSR",
      "logo": "assets/credentials/imperial-college-london-logo.png",
      "media": [
        {
          "src": "assets/credentials/imperial-mathematics-linear-algebra-certificate.jpg",
          "alt": "Course certificate for Khoa Pham Nguyen Thanh: Mathematics for Machine Learning: Linear Algebra, Imperial College London through Coursera, 28 August 2024.",
          "caption": "Mathematics for Machine Learning: Linear Algebra — Imperial College London, offered through Coursera. Awarded 28 August 2024."
        }
      ],
      "evidence": "issuer_verified_credential",
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.coursera.org/account/accomplishments/verify/ZM54A9IKVVSR"
        }
      ]
    },
    {
      "id": "ielts-academic",
      "logo": "assets/idp-logo.webp",
      "title": "IELTS Academic",
      "provider": "IELTS",
      "group": "language",
      "kind": "English language test",
      "issued": "Oct 2026",
      "issuedISO": "2026-10",
      "result": "Overall band 6.5",
      "media": [],
      "evidence": "user_provided_result",
      "sources": [
        {
          "label": "Overall score and test month supplied by the owner"
        }
      ]
    },
    {
      "id": "aiesec-product-management-mentor",
      "title": "Product Management Essentials · Mentor",
      "provider": "AIESEC in Vietnam",
      "group": "honors",
      "kind": "Certificate of appreciation",
      "issued": "6 Jan 2024",
      "issuedISO": "2024-01-06",
      "media": [
        {
          "src": "assets/credentials/aiesec-mentor-appreciation.png",
          "alt": "AIESEC appreciation certificate awarded to Pham Nguyen Thanh Khoa for mentoring Product Management Essentials 2023, issued 6 January 2024.",
          "caption": "AIESEC in Vietnam · Product Management Essentials 2023 mentor · 6 January 2024"
        }
      ],
      "evidence": "original_certificate_supplied_by_owner",
      "sources": [
        {
          "label": "Original certificate supplied by owner"
        },
        {
          "label": "Original appreciation certificate",
          "url": "https://drive.google.com/file/d/1sAp8KvFv0XrG10qTgC1Aq6aQsWBV4C5v/view"
        }
      ],
      "recordUrl": "https://www.linkedin.com/in/khoapnt/details/honors/",
      "detail": "Mentored participants in Product Management Essentials 2023: From Blank to High Rank, a program by AIESEC in Vietnam."
    },
    {
      "id": "vlu-english-proficiency",
      "logo": "assets/vstep-logo.webp",
      "title": "VSTEP English Proficiency",
      "provider": "Van Lang University",
      "group": "language",
      "kind": "Language certificate",
      "issued": "12 Jan 2026",
      "issuedISO": "2026-01-12",
      "result": "Level 4/6 · Overall score 8.0/10",
      "detail": "Listening 9.0 · Reading 7.5 · Writing 7.5 · Speaking 7.5",
      "media": [],
      "evidence": "original_certificate_and_issuer_result_email_reviewed",
      "sources": [
        {
          "label": "Original certificate and issuer result email reviewed privately"
        },
        {
          "label": "Issuer examination centre",
          "url": "https://vstep.vlu.edu.vn/"
        }
      ]
    },
    {
      "id": "udacity-agentic-thinking-101",
      "title": "Agentic Thinking 101",
      "provider": "Udacity",
      "group": "data-ai",
      "kind": "Completed course",
      "year": "2026",
      "logo": "assets/logos/udacity.svg",
      "media": [],
      "evidence": "issuer_completion_email_reviewed",
      "sources": [
        {
          "label": "Issuer completion email reviewed privately"
        },
        {
          "label": "Course information",
          "url": "https://www.udacity.com/course/agentic-thinking-101--cd15637"
        }
      ]
    },
    {
      "id": "udacity-data-scientist",
      "title": "Data Scientist",
      "provider": "Udacity",
      "group": "data-ai",
      "kind": "Nanodegree",
      "year": "2024",
      "logo": "assets/logos/udacity.svg",
      "media": [
        {
          "src": "assets/credentials/udacity-data-scientist-certificate.png",
          "alt": "Data Scientist certificate issued to Khoa Pham Nguyen Thanh",
          "caption": "Udacity Data Scientist Nanodegree completion certificate, issued 2 June 2024."
        }
      ],
      "evidence": "issuer_verified_certificate",
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.udacity.com/certificate/e/91ab0b5a-f036-11ee-a870-4b2fab00226a"
        },
        {
          "label": "CV",
          "url": "https://drive.google.com/file/d/1PY5ls8EuaHZU_FrpLj4eJLD5JIq4PRa9/view"
        }
      ],
      "credentialUrl": "https://www.udacity.com/certificate/e/91ab0b5a-f036-11ee-a870-4b2fab00226a",
      "credentialId": "91ab0b5a-f036-11ee-a870-4b2fab00226a",
      "issuedISO": "2024-06-02",
      "issued": "2 Jun 2024"
    },
    {
      "id": "udacity-intro-ml-pytorch",
      "title": "Introduction to Machine Learning with Pytorch",
      "provider": "Udacity",
      "group": "data-ai",
      "kind": "Nanodegree",
      "year": "2024",
      "logo": "assets/logos/udacity.svg",
      "media": [
        {
          "src": "assets/credentials/udacity-intro-ml-pytorch-certificate.png",
          "alt": "Introduction to Machine Learning with Pytorch certificate issued to Khoa Pham Nguyen Thanh",
          "caption": "Udacity Introduction to Machine Learning with Pytorch Nanodegree completion certificate, issued 1 April 2024."
        }
      ],
      "evidence": "issuer_verified_certificate",
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.udacity.com/certificate/e/ce1397b0-cc19-11ee-afbb-8724d6e2478f"
        },
        {
          "label": "CV",
          "url": "https://drive.google.com/file/d/1PY5ls8EuaHZU_FrpLj4eJLD5JIq4PRa9/view"
        }
      ],
      "credentialUrl": "https://www.udacity.com/certificate/e/ce1397b0-cc19-11ee-afbb-8724d6e2478f",
      "credentialId": "ce1397b0-cc19-11ee-afbb-8724d6e2478f",
      "issuedISO": "2024-04-01",
      "issued": "1 Apr 2024"
    },
    {
      "id": "aws-machine-learning-engineer",
      "title": "AWS Machine Learning Engineer",
      "provider": "Udacity",
      "group": "data-ai",
      "kind": "Nanodegree",
      "issued": "12 Nov 2023",
      "issuedISO": "2023-11-12",
      "logo": "assets/logos/udacity.svg",
      "credentialUrl": "https://www.udacity.com/certificate/e/a40e2a06-1f22-11ee-9e10-8fd43f0312b9",
      "media": [
        {
          "src": "assets/credentials/udacity-aws-ml-engineer-certificate.png",
          "alt": "AWS Machine Learning Engineer Nanodegree certificate issued to Khoa Pham Nguyen Thanh",
          "caption": "Udacity AWS Machine Learning Engineer Nanodegree completion certificate, issued 12 November 2023."
        }
      ],
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.udacity.com/certificate/e/a40e2a06-1f22-11ee-9e10-8fd43f0312b9"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_certificate",
      "credentialId": "a40e2a06-1f22-11ee-9e10-8fd43f0312b9"
    },
    {
      "id": "introduction-to-programming",
      "title": "Intro to Programming",
      "provider": "Udacity",
      "group": "engineering",
      "kind": "Nanodegree",
      "issued": "8 Jun 2023",
      "issuedISO": "2023-06-08",
      "logo": "assets/logos/udacity.svg",
      "credentialUrl": "https://www.udacity.com/certificate/e/54c84a0c-bb73-11ed-a144-5be99a98df1b",
      "media": [
        {
          "src": "assets/credentials/udacity-intro-programming-certificate.png",
          "alt": "Intro to Programming certificate issued to Khoa Pham Nguyen Thanh",
          "caption": "Udacity Intro to Programming Nanodegree completion certificate, issued 8 June 2023."
        }
      ],
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.udacity.com/certificate/e/54c84a0c-bb73-11ed-a144-5be99a98df1b"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_certificate",
      "credentialId": "54c84a0c-bb73-11ed-a144-5be99a98df1b"
    },
    {
      "id": "data-engineering-with-aws",
      "title": "Data Engineering with AWS",
      "provider": "Udacity",
      "group": "engineering",
      "kind": "Nanodegree",
      "issued": "26 Dec 2022",
      "issuedISO": "2022-12-26",
      "logo": "assets/logos/udacity.svg",
      "credentialUrl": "https://www.udacity.com/certificate/WKEUNHQC",
      "media": [
        {
          "src": "assets/credentials/udacity-data-engineering-with-aws-certificate.png",
          "alt": "Data Engineering with AWS certificate issued to Khoa Pham Nguyen Thanh",
          "caption": "Udacity Data Engineering Nanodegree certificate, issued 26 December 2022."
        }
      ],
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.udacity.com/certificate/WKEUNHQC"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_certificate",
      "credentialId": "WKEUNHQC"
    },
    {
      "id": "data-analyst",
      "title": "Data Analyst",
      "provider": "Udacity",
      "group": "data-ai",
      "kind": "Nanodegree",
      "issued": "11 Jun 2022",
      "issuedISO": "2022-06-11",
      "logo": "assets/logos/udacity.svg",
      "credentialUrl": "https://www.udacity.com/certificate/DNVGMAF2",
      "media": [
        {
          "src": "assets/credentials/udacity-data-analyst-certificate.png",
          "alt": "Data Analyst certificate issued to Khoa Pham Nguyen Thanh",
          "caption": "Udacity Data Analyst Nanodegree certificate, issued 11 June 2022."
        }
      ],
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.udacity.com/certificate/DNVGMAF2"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_certificate",
      "credentialId": "DNVGMAF2"
    },
    {
      "id": "data-analyst-with-python",
      "title": "Data Analyst in Python",
      "provider": "DataCamp",
      "group": "data-ai",
      "kind": "Learning track",
      "issued": "26 Jun 2022",
      "issuedISO": "2022-06-26",
      "logo": "assets/credentials/issuer-datacamp.svg",
      "credentialUrl": "https://www.datacamp.com/completed/statement-of-accomplishment/track/f43a328027a5761bc4ac427659aac6b38d4edb2c",
      "media": [
        {
          "src": "assets/credentials/datacamp-data-analyst-python-statement.webp",
          "alt": "Data Analyst in Python DataCamp statement of accomplishment awarded to Khoa Nguyen Thanh Pham",
          "caption": "DataCamp Statement of Accomplishment — Data Analyst in Python, completed 26 June 2022."
        }
      ],
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.datacamp.com/completed/statement-of-accomplishment/track/f43a328027a5761bc4ac427659aac6b38d4edb2c"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_certificate",
      "credentialId": "f43a328027a5761bc4ac427659aac6b38d4edb2c"
    },
    {
      "id": "TGMKEQ8XDKLM",
      "title": "Customer Analytics",
      "provider": "Wharton · Coursera",
      "group": "business",
      "kind": "Course certificate",
      "issued": "16 Nov 2021",
      "issuedISO": "2021-11-16",
      "logo": "assets/credentials/issuer-wharton-upenn.png",
      "credentialUrl": "https://www.coursera.org/account/accomplishments/verify/TGMKEQ8XDKLM",
      "media": [
        {
          "src": "assets/credentials/coursera-customer-analytics.jpg",
          "alt": "Customer Analytics Coursera certificate issued to Khoa Pham Nguyen Thanh",
          "caption": "Wharton Customer Analytics course certificate, completed 16 November 2021"
        }
      ],
      "sources": [
        {
          "label": "Credential source",
          "url": "https://www.coursera.org/account/accomplishments/verify/TGMKEQ8XDKLM"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_page_and_image"
    },
    {
      "id": "QHGG7FPN4ZYB",
      "title": "Learning How to Learn",
      "provider": "Deep Teaching Solutions · Coursera",
      "group": "business",
      "kind": "Course certificate",
      "issued": "18 Oct 2021",
      "issuedISO": "2021-10-18",
      "logo": "assets/credentials/issuer-coursera.png",
      "credentialUrl": "https://www.coursera.org/account/accomplishments/verify/QHGG7FPN4ZYB",
      "media": [
        {
          "src": "assets/credentials/coursera-learning-how-to-learn.jpg",
          "alt": "Learning How to Learn Coursera certificate issued to Khoa Pham Nguyen Thanh",
          "caption": "Learning How to Learn course certificate, completed 18 October 2021"
        }
      ],
      "sources": [
        {
          "label": "Credential source",
          "url": "https://www.coursera.org/account/accomplishments/verify/QHGG7FPN4ZYB"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_page_and_image"
    },
    {
      "id": "4300DC1EEAE2",
      "title": "SQL (Intermediate)",
      "provider": "HackerRank",
      "group": "engineering",
      "kind": "Skills certificate",
      "issued": "29 Sept 2021",
      "issuedISO": "2021-09-29",
      "logo": "assets/credentials/issuer-hackerrank-mark.svg",
      "credentialUrl": "https://www.hackerrank.com/certificates/4300dc1eeae2",
      "media": [
        {
          "src": "assets/credentials/hackerrank-sql-intermediate.jpg",
          "alt": "HackerRank SQL Intermediate certificate issued to Khoa Nguyen Thanh Pham",
          "caption": "HackerRank SQL Intermediate certificate, 29 September 2021"
        }
      ],
      "sources": [
        {
          "label": "Credential source",
          "url": "https://www.hackerrank.com/certificates/4300dc1eeae2"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_page_and_image"
    },
    {
      "id": "sql-fundamentals-track",
      "title": "SQL Fundamentals",
      "provider": "DataCamp",
      "group": "engineering",
      "kind": "Learning track",
      "issued": "14 Sept 2021",
      "issuedISO": "2021-09-14",
      "logo": "assets/credentials/issuer-datacamp.svg",
      "credentialUrl": "https://www.datacamp.com/completed/statement-of-accomplishment/track/cf98c43160b979baff3275257438753efe3529e1",
      "media": [
        {
          "src": "assets/credentials/datacamp-sql-fundamentals-statement.webp",
          "alt": "SQL Fundamentals DataCamp statement of accomplishment awarded to Khoa Nguyen Thanh Pham",
          "caption": "DataCamp Statement of Accomplishment — SQL Fundamentals, completed 14 September 2021."
        }
      ],
      "sources": [
        {
          "label": "Issuer verification",
          "url": "https://www.datacamp.com/completed/statement-of-accomplishment/track/cf98c43160b979baff3275257438753efe3529e1"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_certificate",
      "credentialId": "cf98c43160b979baff3275257438753efe3529e1"
    },
    {
      "id": "931F2A6BFB9F",
      "title": "SQL (Basic)",
      "provider": "HackerRank",
      "group": "engineering",
      "kind": "Skills certificate",
      "issued": "19 Aug 2021",
      "issuedISO": "2021-08-19",
      "logo": "assets/credentials/issuer-hackerrank-mark.svg",
      "credentialUrl": "https://www.hackerrank.com/certificates/931f2a6bfb9f",
      "media": [
        {
          "src": "assets/credentials/hackerrank-sql-basic.jpg",
          "alt": "HackerRank SQL Basic certificate issued to Khoa Pham Nguyen Thanh",
          "caption": "HackerRank SQL Basic certificate, 19 August 2021"
        }
      ],
      "sources": [
        {
          "label": "Credential source",
          "url": "https://www.hackerrank.com/certificates/931f2a6bfb9f"
        },
        {
          "label": "Credential source",
          "url": "https://vn.linkedin.com/in/khoapnt"
        }
      ],
      "evidence": "issuer_verified_page_and_image"
    },
    {
      "id": "atoha-project-management",
      "title": "Project Management Professional® Training",
      "provider": "Atoha",
      "group": "business",
      "kind": "Completed training",
      "year": "2023",
      "logo": "assets/logos/atoha.png",
      "media": [
        {
          "src": "assets/credentials/atoha-project-management-training.png",
          "alt": "Atoha Certificate of Achievement awarded to Pham Nguyen Thanh Khoa for completing Project Management Professional Training",
          "caption": "Atoha Project Management Professional® Training, 24 contact hours, September 2023."
        }
      ],
      "evidence": "user_supplied_certificate_image",
      "sources": [
        {
          "label": "Original certificate photograph supplied by the owner"
        }
      ],
      "issued": "Sept 2023",
      "issuedISO": "2023-09",
      "result": "24 contact hours",
      "courseId": "IPMP"
    },
    {
      "id": "mda-business-intelligence",
      "title": "Business Intelligence Program",
      "provider": "Mastering Data Analytics",
      "group": "business",
      "kind": "Completed course",
      "year": "2021",
      "media": [
        {
          "src": "assets/credentials/mda-business-intelligence-program.png",
          "alt": "Mastering Data Analytics Certificate of Achievement awarded to Khoa Pham for the Business Intelligence Program",
          "caption": "Mastering Data Analytics Business Intelligence Program, six advanced modules over 2.5 months, November 2021."
        }
      ],
      "evidence": "user_supplied_certificate_image",
      "sources": [
        {
          "label": "Original certificate image supplied by the owner"
        }
      ],
      "issued": "Nov 2021",
      "issuedISO": "2021-11",
      "result": "6 advanced modules · 2.5 months"
    },
    {
      "id": "rmit-digital-innovation-guest-speaker",
      "title": "Guest Speaker · MBA Digital Innovation",
      "provider": "RMIT Vietnam",
      "group": "honors",
      "kind": "Certificate of appreciation",
      "issued": "Nov 2025",
      "issuedISO": "2025-11",
      "detail": "Recognized by RMIT Vietnam for sharing industry insights with MBA students in the Digital Innovation course, Semester 3, 2025.",
      "recordUrl": "https://www.linkedin.com/feed/update/urn:li:activity:7394708697018454016/",
      "media": [
        {
          "src": "assets/credentials/rmit-digital-innovation-appreciation.png",
          "alt": "RMIT Certificate of Appreciation presented to Khoa Pham for the Digital Innovation course in Semester 3, 2025.",
          "caption": "RMIT Vietnam · Digital Innovation guest speaker · Semester 3, 2025"
        }
      ],
      "evidence": "original_certificate_supplied_by_owner",
      "sources": [
        {
          "label": "Original certificate supplied by owner"
        },
        {
          "label": "LinkedIn Honors & Awards",
          "url": "https://www.linkedin.com/in/khoapnt/details/honors/"
        },
        {
          "label": "Guest-speaking post supplied by owner",
          "url": "https://www.linkedin.com/feed/update/urn:li:activity:7394708697018454016/"
        }
      ],
      "recordLabel": "Guest Speaker — RMIT MBA Class"
    },
    {
      "id": "spe-vietnam-scholarship",
      "title": "Society of Petroleum Engineers · Vietnam Scholarship",
      "provider": "Society of Petroleum Engineers (SPE)",
      "group": "honors",
      "kind": "Scholarship",
      "issued": "Mar 2011",
      "issuedISO": "2011-03",
      "detail": "I received the Society of Petroleum Engineers (SPE) Vietnam Scholarship and was honored to represent the scholarship recipients, delivering a thank-you speech to petroleum industry professionals, SPE members, and professors at the Sheraton Hotel in 2011.",
      "recordUrl": "https://www.linkedin.com/in/khoapnt/details/honors/",
      "media": [
        {
          "src": "assets/credentials/spe-vietnam-scholarship.png",
          "alt": "Society of Petroleum Engineers Vietnam Certificate of Scholarship awarded to Pham Nguyen Thanh Khoa, March 2011.",
          "caption": "Society of Petroleum Engineers · Vietnam Scholarship · March 2011"
        }
      ],
      "evidence": "original_certificate_supplied_by_owner",
      "sources": [
        {
          "label": "Original certificate supplied by owner"
        },
        {
          "label": "LinkedIn Honors & Awards",
          "url": "https://www.linkedin.com/in/khoapnt/details/honors/"
        }
      ]
    }
  ]
};
